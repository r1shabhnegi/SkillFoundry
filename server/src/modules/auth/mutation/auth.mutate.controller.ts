import {
  clearAuthenticationCookies,
  setAuthenticationCookies,
} from "../../../common/utils/cookies";
import { asyncHandler } from "../../../middlewares/asyncHandler";
import {
  emailSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  verificationEmailSchema,
  verifyMfaForLoginSchema,
  verifyMfaSchema,
} from "../auth.validations";
import * as authMutationService from "./auth.mutate.service";

const applicantRegister = asyncHandler(async (req, res) => {
  console.log("req.body", req.body);
  const { success, data } = registerSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const { newUser, verificationCode } =
    await authMutationService.applicantRegister(data);

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

  const { user } = await authMutationService.verifyEmail(code);

  res.status(200).json({ message: "Email verified successfully", user: user });
});

const applicantLogin = asyncHandler(async (req, res) => {
  const userAgent = req.headers["user-agent"];
  const { success, data } = loginSchema.safeParse(req.body);

  if (!success) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const { user, accessToken, refreshToken, mfaRequired } =
    await authMutationService.applicantLogin(data, userAgent || "");

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

const forgetPassword = asyncHandler(async (req, res) => {
  const { success, data: email } = emailSchema.safeParse(req.body.email);

  if (!success) {
    return res.status(400).json({ message: "Invalid request" });
  }

  await authMutationService.forgotPassword(email);

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

  await authMutationService.resetPassword(password, verificationCode);

  clearAuthenticationCookies(res).status(200).json({
    message: "Reset Password successfully",
  });
});

const logout = asyncHandler(async (req, res) => {
  const sessionId = req.sessionId;
  if (!sessionId) {
    throw new Error("Session is invalid.");
  }
  await authMutationService.logout(sessionId);

  clearAuthenticationCookies(res).status(200).json({
    message: "User logout successfully",
  });
});

const verifyMFASetup = asyncHandler(async (req, res) => {
  const { code, secretKey } = verifyMfaSchema.parse({
    ...req.body,
  });
  const { userPreferences, message } = await authMutationService.verifyMFASetup(
    req,
    code,
    secretKey
  );
  return res.status(200).json({
    message: message,
    userPreferences: userPreferences,
  });
});

const revokeMFA = asyncHandler(async (req, res) => {
  const { message, userPreferences } = await authMutationService.revokeMFA(req);
  return res.status(200).json({
    message,
    userPreferences,
  });
});

const verifyMFAForLogin = asyncHandler(async (req, res) => {
  const { code, email, userAgent } = verifyMfaForLoginSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });

  const { accessToken, refreshToken, user } =
    await authMutationService.verifyMFAForLogin(code, email, userAgent);

  return setAuthenticationCookies({
    res,
    accessToken,
    refreshToken,
  })
    .status(200)
    .json({
      message: "Verified & login successfully",
      user,
    });
});

const deleteSession = asyncHandler(async (req, res) => {
  const sessionId = req.params.id;
  // await authMutationService.deleteSession(sessionId);
  return res.status(200).json({ message: "Session deleted successfully" });
});

export {
  applicantRegister,
  verifyEmail,
  applicantLogin,
  forgetPassword,
  resetPassword,
  logout,
  verifyMFASetup,
  revokeMFA,
  verifyMFAForLogin,
  deleteSession,
};
