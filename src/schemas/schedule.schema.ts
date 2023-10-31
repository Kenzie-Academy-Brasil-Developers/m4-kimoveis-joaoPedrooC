import { z } from "zod";

export const ScheduleSchema = z.object({
  id: z.number(),
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number(),
  userId: z.number()
});

export const CreateScheduleSchema = ScheduleSchema.omit({ id: true, userId: true });