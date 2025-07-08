import { Resend } from "resend";
import appConfig from "../configs/app.config";

export const resend = new Resend(appConfig.RESEND_API_KEY);
