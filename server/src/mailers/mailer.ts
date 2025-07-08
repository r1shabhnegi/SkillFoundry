import appConfig from "../configs/app.config";
import { resend } from "./resend";

type Params = {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  from?: string;
};

const mailer_sender =
  appConfig.NODE_ENV === "development"
    ? `no-reply <rishbhnegi1175@gmail.com>`
    : `no-reply <${appConfig.MAILER_SENDER}>`;

export const sendEmail = async ({
  to,
  from = mailer_sender,
  subject,
  text,
  html,
}: Params) => {
  try {
    await resend.emails.send({
      from,
      to: Array.isArray(to) ? to : [to],
      text,
      subject,
      html,
    });
  } catch (error) {
    console.log(error);
  }
};
