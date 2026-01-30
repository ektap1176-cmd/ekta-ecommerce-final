import { z } from "zod";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  emailOrPhone: z.string().min(5, "Email or Phone is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default signupSchema;
