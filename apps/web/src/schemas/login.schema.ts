import { z } from "zod";

export const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type loginFormType = z.infer<typeof loginSchema>;