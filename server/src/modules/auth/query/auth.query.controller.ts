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
  const userId = req.user?.user_id;
  const session_id = req.session_id;

  const { sessionData } = await authQueryService.getAllSession(userId);

  const modifySessions = sessionData.map((session) => ({
    ...session,
    ...(session.session_id === session_id && {
      isCurrent: true,
    }),
  }));

  return res.status(HTTPSTATUS.OK).json({
    message: "Retrieved all session successfully",
    sessions: modifySessions,
  });
});

const getSession = asyncHandler(async (req, res) => {
  const session_id = req?.session_id;

  if (!session_id) {
    throw new Error("Session ID not found. Please log in.");
  }

  const { user } = await authQueryService.getSessionById(session_id);

  return res.status(200).json({
    message: "Session retrieved successfully",
    user,
  });
});

export { refreshToken, generateMFASetup, getAllSession, getSession };
