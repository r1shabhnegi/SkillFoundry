import { LoginType, RegisterType } from "../auth.validations";
import { db } from "../../../database/db";
import {
  roles,
  sessions,
  users,
  verification_codes,
} from "../../../database/schema";
import { and, count, eq, gte } from "drizzle-orm";
import { compareValue, hashValue } from "../../../common/utils/bcrypt";
import {
  anHourFromNow,
  calculateExpirationDate,
  ONE_DAY_IN_MS,
  thirtyDaysFromNow,
  threeMinutesAgo,
} from "../../../common/utils/date-time";
import { generateUniqueCode } from "../../../common/utils/uuid";
import { UserRoles } from "../../../common/enums/user-roles";
import appConfig from "../../../configs/app.config";
import { sendEmail } from "../../../mailers/mailer";
import {
  passwordResetTemplate,
  verifyEmailTemplate,
} from "../../../mailers/templates/verifyEmailTemplate";
import { sendMailFromNM } from "../../../mailers/nodemailer";
import { VerificationEnum } from "../../../common/enums/verificationEnum";
import {
  refreshTokenSignOptions,
  signJwtToken,
  verifyJwtToken,
} from "../../../common/utils/jwt";

const applicantRegister = async (data: RegisterType) => {
  const { email, password } = data;

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    throw new Error("User already exists");
  }

  const hashedPassword = await hashValue(password);

  const [role] = await db
    .select({ role_id: roles.role_id })
    .from(roles)
    .where(eq(roles.name, UserRoles.APPLICANT))
    .limit(1);

  if (!role) {
    throw new Error("Role not found");
  }

  let newUser: { user_id: string; email: string };

  const uniqueCode = generateUniqueCode();

  await db.transaction(async (tx) => {
    [newUser] = await tx
      .insert(users)
      .values({
        role_id: role.role_id,
        email,
        password_hash: hashedPassword,
      })
      .returning({ user_id: users.user_id, email: users.email });

    const [verificationCode] = await tx
      .insert(verification_codes)
      .values({
        user_id: newUser.user_id,
        code: uniqueCode,
        type: VerificationEnum.EMAIL_VERIFICATION,
        expires_at: anHourFromNow(),
      })
      .returning({ code: verification_codes.code });

    const verificationUrl = `${appConfig.CLIENT_URL}/confirm-account?code=${verificationCode.code}`;

    // await sendEmail({
    //   to: newUser.email,
    //   ...verifyEmailTemplate(verificationUrl),
    // });

    await sendMailFromNM({
      to: newUser.email,
      ...verifyEmailTemplate(verificationUrl),
    });
  });

  return { newUser: newUser!, verificationCode: uniqueCode };
};

const verifyEmail = async (code: string) => {
  const existingCode = await db
    .select()
    .from(verification_codes)
    .where(
      and(
        eq(verification_codes.code, code),
        eq(verification_codes.type, VerificationEnum.EMAIL_VERIFICATION),
        gte(verification_codes.expires_at, new Date())
      )
    )
    .limit(1);

  if (existingCode.length === 0) {
    throw new Error("Invalid or expired verification code");
  }

  const { user_id } = existingCode[0];

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.user_id, user_id || ""))
    .limit(1);

  if (existingUser.length === 0) {
    throw new Error("User not found");
  }

  const { user_id: userId } = existingUser[0];

  await db
    .update(users)
    .set({ is_verified: true })
    .where(eq(users.user_id, userId));

  await db
    .delete(verification_codes)
    .where(eq(verification_codes.user_id, userId));

  return { user: existingUser[0] };
};

const applicantLogin = async (data: LoginType, userAgent: string) => {
  const { email, password } = data;

  const findExistingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (findExistingUser.length === 0) {
    throw new Error("User not found");
  }

  const existingUserData = findExistingUser[0];

  if (!existingUserData.is_verified) {
    throw new Error("Email not verified");
  }

  const isPasswordValid = await compareValue(
    password,
    existingUserData.password_hash
  );

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  if (existingUserData.is_mfa_enabled) {
    return {
      user: null,
      mfaRequired: true,
      accessToken: "",
      refreshToken: "",
    };
  }

  const [session] = await db
    .insert(sessions)
    .values({
      user_id: existingUserData.user_id,
      user_agent: userAgent,
      expires_at: thirtyDaysFromNow(),
    })
    .returning({ session_id: sessions.session_id });

  const accessToken = signJwtToken({
    user_id: existingUserData.user_id,
    session_id: session.session_id,
  });
  const refreshToken = signJwtToken(
    { session_id: session.session_id },
    refreshTokenSignOptions
  );

  return {
    user: existingUserData,
    accessToken,
    refreshToken,
    mfaRequired: false,
  };
};

const refreshToken = async (refreshToken: string) => {
  const { payload } = verifyJwtToken(refreshToken, {
    secret: refreshTokenSignOptions.secret,
  });

  if (!payload) {
    throw new Error("Invalid refresh token");
  }

  const findSession = await db
    .select()
    .from(sessions)
    .where(eq(sessions.session_id, payload.session_id))
    .limit(1);

  if (findSession.length === 0) {
    throw new Error("Session not found");
  }

  const findSessionData = findSession[0];
  const now = Date.now();

  if (findSessionData.expires_at.getTime() <= now) {
    throw new Error("Session expired");
  }

  const sessionRequireRefresh =
    findSessionData.expires_at.getTime() - now <= ONE_DAY_IN_MS;

  if (sessionRequireRefresh) {
    const newExpiresAt = calculateExpirationDate(
      appConfig.JWT.REFRESH_EXPIRES_IN
    );
    await db
      .update(sessions)
      .set({ expires_at: newExpiresAt })
      .where(eq(sessions.session_id, findSessionData.session_id));
  }

  const newRefreshToken = sessionRequireRefresh
    ? signJwtToken(
        {
          session_id: findSessionData.session_id,
        },
        refreshTokenSignOptions
      )
    : undefined;

  const accessToken = signJwtToken({
    user_id: findSessionData.user_id || "",
    session_id: findSessionData.session_id,
  });

  return {
    accessToken,
    newRefreshToken,
  };
};

const forgotPassword = async (email: string) => {
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length === 0) {
    throw new Error("User not found");
  }

  const existingUserData = existingUser[0];

  const timeAgo = threeMinutesAgo();
  const maxAttempts = 2;
  const [attempts] = await db
    .select({ count: count() })
    .from(verification_codes)
    .where(
      and(
        eq(verification_codes.user_id, existingUserData.user_id),
        eq(verification_codes.type, VerificationEnum.PASSWORD_RESET),
        gte(verification_codes.created_at, timeAgo)
      )
    );

  if (attempts.count >= maxAttempts) {
    throw new Error("Too many attempts");
  }
  const uniqueCode = generateUniqueCode();
  const expiresAt = anHourFromNow();

  const [validCode] = await db
    .insert(verification_codes)
    .values({
      user_id: existingUserData.user_id,
      code: uniqueCode,
      type: VerificationEnum.PASSWORD_RESET,
      expires_at: expiresAt,
    })
    .returning({ code: verification_codes.code });

  const resetLink = `${appConfig.CLIENT_URL}/reset-password?code=${
    validCode.code
  }&exp=${expiresAt.getTime()}`;

  // await sendMailFromNM({
  //   to: existingUserData.email,
  //   ...resetPasswordTemplate(resetLink),
  // });

  try {
    await sendMailFromNM({
      to: existingUserData.email,
      ...passwordResetTemplate(resetLink),
    });
  } catch (error) {
    console.log("Error sending email:", error);
  }

  return {
    url: resetLink,
    emailId: existingUserData.user_id,
  };
};

const resetPassword = async (password: string, verificationCode: string) => {
  const existingCode = await db
    .select()
    .from(verification_codes)
    .where(
      and(
        eq(verification_codes.code, verificationCode),
        eq(verification_codes.type, VerificationEnum.PASSWORD_RESET),
        gte(verification_codes.expires_at, new Date())
      )
    )
    .limit(1);

  if (existingCode.length === 0) {
    throw new Error("Invalid or expired verification code");
  }

  const hashedPassword = await hashValue(password);

  const existingCodeData = existingCode[0];

  const updatedUser = await db
    .update(users)
    .set({ password_hash: hashedPassword })
    .where(eq(users.user_id, existingCodeData.user_id || ""))
    .returning({ user_id: users.user_id, email: users.email });

  await db
    .delete(verification_codes)
    .where(eq(verification_codes.code, verificationCode));

  await db
    .delete(verification_codes)
    .where(eq(verification_codes.user_id, existingCodeData.user_id || ""));

  return {
    user: updatedUser[0],
  };
};

const logout = async (sessionId: string) => {
  return await db.delete(sessions).where(eq(sessions.session_id, sessionId));
};

export {
  applicantRegister,
  verifyEmail,
  applicantLogin,
  refreshToken,
  forgotPassword,
  resetPassword,
  logout,
};
