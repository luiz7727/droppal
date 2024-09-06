import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  telephone: z.string(),
  username: z.string(),
  password: z.string(),
});

export type signUpFormType = z.infer<typeof signUpSchema>;