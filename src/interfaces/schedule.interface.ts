import { z } from "zod";
import { CreateScheduleSchema, ScheduleSchema } from "../schemas/schedule.schema";

export type Schedule = z.infer<typeof ScheduleSchema>;
export type ScheduleCreate = z.infer<typeof CreateScheduleSchema>;