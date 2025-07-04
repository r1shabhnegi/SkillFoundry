import { z } from "zod";

export const registerSchema = z.object({
  fullname: z.string().trim().min(1).max(50),
  email: z.string().trim().email().min(1).max(255),
  password: z
    .string()
    .trim()
    .min(8)
    .max(50)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    ),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
