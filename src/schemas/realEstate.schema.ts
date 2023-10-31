import { z } from "zod";

export const RealEstateSchema = z.object({
  id: z.number(),
  value: z.number().or(z.string()),
  size: z.number(),
  sold: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
  addressId: z.number(),
  categoryId: z.number(),
});

export const CreateRealEstatePayloadSchema = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: z.object({
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.number(),
    city: z.string().max(20),
    state: z.string().max(2)
  }),
  categoryId: z.number()
});
