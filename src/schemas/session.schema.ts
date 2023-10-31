import { z } from 'zod';

export const SessionSchema = z.object({
  email: z.string().email(),
  password: z.string()
})