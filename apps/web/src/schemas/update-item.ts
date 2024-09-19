import { z } from "zod";

export const updateItemSchema = z.object({
  title: z.string(),
  available_quantity: z.number(),
  price: z.number()
});

export type updateItemFormType = z.infer<typeof updateItemSchema>;