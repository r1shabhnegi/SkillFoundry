import { Router } from "express";
import * as authMutationController from "./mutation/auth.mutate.controller";
import * as authQueryController from "./query/auth.query.controller";
import { authenticateJWT } from "../../common/utils/jwt.strategy";

const authRouter = Router();

// Mutation Routes
authRouter.post(
  "/applicant-registration",
  authMutationController.applicantRegister
);
authRouter.post("/verify-email", authMutationController.verifyEmail);
authRouter.post("/applicant-login", authMutationController.applicantLogin);
authRouter.post("/password/forgot", authMutationController.forgetPassword);
authRouter.post("/password/reset", authMutationController.resetPassword);
authRouter.post("/logout", authenticateJWT, authMutationController.logout);
authRouter.post(
  "/mfa/verify",
  authenticateJWT,
  authMutationController.verifyMFASetup
);
authRouter.put(
  "/mfa/revoke",
  authenticateJWT,
  authMutationController.revokeMFA
);
authRouter.post("/mfa/verify-login", authMutationController.verifyMFAForLogin);
authRouter.delete(
  "/session/:id",
  authenticateJWT,
  authMutationController.deleteSession
);

// Query Routes
authRouter.get("/refresh", authQueryController.refreshToken);
authRouter.get(
  "/mfa/setup",
  authenticateJWT,
  authQueryController.generateMFASetup
);
authRouter.get(
  "/session/all",
  authenticateJWT,
  authQueryController.getAllSession
);
authRouter.get("/session", authenticateJWT, authQueryController.getSession);

export default authRouter;
