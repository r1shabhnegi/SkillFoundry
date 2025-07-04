import { z } from "zod";

const emailSchema = z.string().trim().email().min(1).max(255);
const passwordSchema = z.string().trim().min(8).max(50);

export const registerSchema = z.object({
  fullname: z.string().trim().min(1).max(50),
  email: emailSchema,
  password: passwordSchema,
});

export type RegisterSchema = z.infer<typeof registerSchema>;
