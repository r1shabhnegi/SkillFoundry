import { LoginType, RegisterType } from "../auth.validations";
import { db } from "../../../database/db";
import {
  roles,
  sessions,
  User,
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
import speakeasy from "speakeasy";

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

const verifyMFASetup = async (user: User, code: string, secretKey: string) => {
  if (!user) {
    throw new Error("User not authorized");
  }

  if (user.is_mfa_enabled) {
    return {
      message: "MFA is already enabled",
      userPreferences: {
        is_mfa_enabled: user.is_mfa_enabled,
      },
    };
  }

  const isValid = speakeasy.totp.verify({
    secret: secretKey,
    encoding: "base32",
    token: code,
  });

  if (!isValid) {
    throw new Error("Invalid MFA code. Please try again.");
  }

  await db
    .update(users)
    .set({ is_mfa_enabled: true })
    .where(eq(users.user_id, user.user_id));

  return {
    message: "MFA setup completed successfully",
    userPreferences: {
      is_mfa_enabled: user.is_mfa_enabled,
    },
  };
};

const revokeMFA = async (user: User) => {
  if (!user) {
    throw new Error("User not authorized");
  }

  if (!user.is_mfa_enabled) {
    return {
      message: "MFA is not enabled",
      userPreferences: {
        is_mfa_enabled: user.is_mfa_enabled,
      },
    };
  }

  await db
    .update(users)
    .set({ is_mfa_enabled: false, mfa_secret: null })
    .where(eq(users.user_id, user.user_id));

  return {
    message: "MFA revoke successfully",
    userPreferences: {
      is_mfa_enabled: user.is_mfa_enabled,
    },
  };
};

const verifyMFAForLogin = async (
  code: string,
  email: string,
  userAgent?: string
) => {
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.is_mfa_enabled && !user.mfa_secret) {
    throw new Error("MFA not enabled for this user");
  }

  const isValid = speakeasy.totp.verify({
    secret: user.mfa_secret!,
    encoding: "base32",
    token: code,
  });

  if (!isValid) {
    throw new Error("Invalid MFA code. Please try again.");
  }

  //sign access token & refresh token
  const [session] = await db
    .insert(sessions)
    .values({
      user_id: user.user_id,
      user_agent: userAgent || "",
      expires_at: thirtyDaysFromNow(),
    })
    .returning({ session_id: sessions.session_id });

  const accessToken = signJwtToken({
    user_id: user.user_id,
    session_id: session.session_id,
  });

  const refreshToken = signJwtToken(
    {
      session_id: session.session_id,
    },
    refreshTokenSignOptions
  );

  return {
    user,
    accessToken,
    refreshToken,
  };
};

export {
  applicantRegister,
  verifyEmail,
  applicantLogin,
  forgotPassword,
  resetPassword,
  logout,
  verifyMFASetup,
  revokeMFA,
  verifyMFAForLogin,
};
