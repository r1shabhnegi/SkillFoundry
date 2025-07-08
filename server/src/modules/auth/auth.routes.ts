import { Router } from "express";
import * as authMutationController from "./mutation/auth.mutate.controller";
import { authenticateJWT } from "../../common/utils/jwt.strategy";

const authRouter = Router();

// Mutation Routes

authRouter.post(
  "/applicant-register",
  authMutationController.applicantRegister
);
authRouter.post("/verify-email", authMutationController.verifyEmail);
authRouter.post("/applicant-login", authMutationController.applicantLogin);
authRouter.post("/password/forget", authMutationController.forgetPassword);
authRouter.post("/password/reset", authMutationController.resetPassword);
authRouter.post("/logout", authenticateJWT, authMutationController.logout);

// Query Routes
authRouter.get("/refresh", authMutationController.refreshToken);

export default authRouter;
