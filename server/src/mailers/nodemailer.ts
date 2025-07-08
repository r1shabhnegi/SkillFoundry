import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAILER_SENDER,
    pass: process.env.MAILER_PASS,
  },
});

interface options {
  to: string;
  subject: string;
  html: string;
  text: string;
}

export const sendMailFromNM = async ({ to, subject, html, text }: options) => {
  const mailOptions = {
    from: "rishabhnegi175@gmail.com",
    to,
    subject,
    text,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.log("Error sending email:", error);
  }
};
