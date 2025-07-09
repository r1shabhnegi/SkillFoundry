import { and, eq, gt } from "drizzle-orm";
import {
  refreshTokenSignOptions,
  signJwtToken,
  verifyJwtToken,
} from "../../../common/utils/jwt";
import { db } from "../../../database/db";
import { sessions, User, users } from "../../../database/schema";
import {
  calculateExpirationDate,
  ONE_DAY_IN_MS,
} from "../../../common/utils/date-time";
import appConfig from "../../../configs/app.config";
import speakeasy from "speakeasy";
import qrcode from "qrcode";

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

const generateMFASetup = async (user: User) => {
  if (!user) {
    throw new Error("User not found");
  }

  if (user.is_mfa_enabled) {
    return {
      message: "MFA already enabled",
    };
  }

  let secretKey = user.mfa_secret;
  if (!secretKey) {
    const secret = speakeasy.generateSecret({ name: "Job Portal" });
    secretKey = secret.base32;
    await db
      .update(users)
      .set({ mfa_secret: secretKey })
      .where(eq(users.user_id, user.user_id));
  }

  const url = speakeasy.otpauthURL({
    secret: secretKey,
    label: `${user.email}`,
    issuer: "job-portal.com",
    encoding: "base32",
  });

  const qrImageUrl = await qrcode.toDataURL(url);

  return {
    message: "Scan the QR code or use the setup key.",
    secret: secretKey,
    qrImageUrl,
  };
};

const getAllSession = async (userId: string) => {
  const sessionData = await db
    .select()
    .from(sessions)
    .where(
      and(eq(sessions.user_id, userId), gt(sessions.expires_at, new Date()))
    );
  return {
    sessionData,
  };
};

const getSessionById = async (sessionId: string) => {
  const session = await db
    .select()
    .from(sessions)
    .where(eq(sessions.session_id, sessionId));

  if (!session) {
    throw new Error("Session not found");
  }

  return {
    session,
  };
};

export { refreshToken, generateMFASetup, getAllSession, getSessionById };
