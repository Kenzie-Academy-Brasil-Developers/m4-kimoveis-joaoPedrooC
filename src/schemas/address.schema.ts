import { z } from "zod";

export const AddressSchema = z.object({
  id: z.number(),
  zipCode: z.string().max(8),
  number: z.number(),
  city: z.string().max(20),
  state: z.string().max(2)
});