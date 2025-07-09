import {
  getAccessTokenCookieOptions,
  getRefreshTokenCookieOptions,
} from "../../../common/utils/cookies";
import { HTTPSTATUS } from "../../../configs/http.config";
import { User } from "../../../database/schema";
import { asyncHandler } from "../../../middlewares/asyncHandler";
import * as authQueryService from "./auth.query.service";

const refreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken as string | undefined;
  if (!refreshToken) {
    throw new Error("Missing refresh token");
  }

  const { accessToken, newRefreshToken } =
    await authQueryService.refreshToken(refreshToken);

  if (newRefreshToken) {
    res.cookie("refreshToken", newRefreshToken, getRefreshTokenCookieOptions());
  }

  res
    .status(200)
    .cookie("accessToken", accessToken, getAccessTokenCookieOptions())
    .json({
      message: "Refresh access token successfully",
    });
});

const generateMFASetup = asyncHandler(async (req, res) => {
  const { secret, qrImageUrl, message } =
    await authQueryService.generateMFASetup(req.user as User);
  return res.status(200).json({
    message,
    secret,
    qrImageUrl,
  });
});

const getAllSession = asyncHandler(async (req, res) => {
  const userId = req.user?.user_id as User["user_id"];
  const sessionId = req.sessionId;

  const { sessionData } = await authQueryService.getAllSession(userId);

  const modifySessions = sessionData.map((session) => ({
    ...session,
    ...(session.session_id === sessionId && {
      isCurrent: true,
    }),
  }));

  return res.status(HTTPSTATUS.OK).json({
    message: "Retrieved all session successfully",
    sessions: modifySessions,
  });
});

const getSession = asyncHandler(async (req, res) => {
  const sessionId = req?.sessionId;

  if (!sessionId) {
    throw new Error("Session ID not found. Please log in.");
  }

  const { session } = await authQueryService.getSessionById(sessionId);

  return res.status(200).json({
    message: "Session retrieved successfully",
    session,
  });
});

export { refreshToken, generateMFASetup, getAllSession, getSession };
