import {
  clearAuthenticationCookies,
  getAccessTokenCookieOptions,
  getRefreshTokenCookieOptions,
  setAuthenticationCookies,
} from "../../../common/utils/cookies";
import { asyncHandler } from "../../../middlewares/asyncHandler";
import {
  emailSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  verificationEmailSchema,
} from "../auth.validations";
import * as authService from "./auth.mutate.service";

const applicantRegister = asyncHandler(async (req, res) => {
  console.log("req.body", req.body);
  const { success, data } = registerSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const { newUser, verificationCode } =
    await authService.applicantRegister(data);

  res.status(200).json({
    message: "User registered successfully",
    newUser,
    verificationCode,
  });
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { success, data } = verificationEmailSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const code = data.code;

  const { user } = await authService.verifyEmail(code);

  res.status(200).json({ message: "Email verified successfully", user: user });
});

const applicantLogin = asyncHandler(async (req, res) => {
  const userAgent = req.headers["user-agent"];
  const { success, data } = loginSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const { user, accessToken, refreshToken, mfaRequired } =
    await authService.applicantLogin(data, userAgent || "");

  if (mfaRequired) {
    return res.status(200).json({
      message: "MFA required",
      user: null,
      mfaRequired: true,
    });
  }

  setAuthenticationCookies({
    res,
    accessToken,
    refreshToken,
  })
    .status(200)
    .json({
      message: "Login successful",
      user,
      mfaRequired: false,
    });
});

const refreshToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken as string | undefined;
  if (!refreshToken) {
    throw new Error("Missing refresh token");
  }

  const { accessToken, newRefreshToken } =
    await authService.refreshToken(refreshToken);

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

const forgetPassword = asyncHandler(async (req, res) => {
  const { success, data: email } = emailSchema.safeParse(req.body.email);

  if (!success) {
    return res.status(400).json({ message: "Invalid request" });
  }

  await authService.forgotPassword(email);

  res.status(200).json({
    message: "Password reset email sent",
  });
});

const resetPassword = asyncHandler(async (req, res) => {
  const { success, data } = resetPasswordSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const { password, verificationCode } = data;

  await authService.resetPassword(password, verificationCode);

  clearAuthenticationCookies(res).status(200).json({
    message: "Reset Password successfully",
  });
});

const logout = asyncHandler(async (req, res) => {
  const sessionId = req.sessionId;
  if (!sessionId) {
    throw new Error("Session is invalid.");
  }
  await authService.logout(sessionId);

  clearAuthenticationCookies(res).status(200).json({
    message: "User logout successfully",
  });
});

export {
  applicantRegister,
  verifyEmail,
  applicantLogin,
  refreshToken,
  forgetPassword,
  resetPassword,
  logout,
};
