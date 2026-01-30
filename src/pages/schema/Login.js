import { z } from "zod";

export const loginSchema = z.object({
  emailOrPhone: z.string().min(10, "Enter email or phone"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
