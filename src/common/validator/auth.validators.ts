import { z } from "zod";

export const emailSchema = z.string().trim().email().min(1).max(255);

export const registerSchema = z.object({
  email: emailSchema,
  uid: z.string().min(1).max(255),
});
