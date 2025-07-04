import { Router } from "express";
import { aplicantRegistration } from "./auth.controller";

const authRouter = Router();

authRouter.post("/aplicant-registration", aplicantRegistration);

export default authRouter;
