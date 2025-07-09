import { z } from "zod";

export const emailSchema = z.string().trim().email().min(1).max(255);
export const passwordSchema = z.string().trim().min(8).max(50);
export const verificationCodeSchema = z.string().trim().min(1).max(25);

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type RegisterType = z.infer<typeof registerSchema>;

export const verificationEmailSchema = z.object({
  code: verificationCodeSchema,
});

export type VerificationEmailType = z.infer<typeof verificationEmailSchema>;

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginType = z.infer<typeof loginSchema>;

export const resetPasswordSchema = z.object({
  password: passwordSchema,
  verificationCode: verificationCodeSchema,
});

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;

export const verifyMfaSchema = z.object({
  code: z.string().trim().min(1).max(6),
  secretKey: z.string().trim().min(1),
});

export type VerifyMfaType = z.infer<typeof verifyMfaSchema>;

export const verifyMfaForLoginSchema = z.object({
  code: z.string().trim().min(1).max(6),
  email: z.string().trim().email().min(1),
  userAgent: z.string().optional(),
});

export type VerifyMfaForLoginType = z.infer<typeof verifyMfaForLoginSchema>;
