import { Router } from "express";
import { validateBodyMiddleware, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { CreateScheduleSchema } from "../schemas/schedule.schema";
import { createScheduleController, readRealEstateSchedulesController } from "../controllers/schedule.controller";
import { verifyUserScheduledMiddleware } from "../middlewares/verifyUserScheduled.middleware";
import { verifyScheduleTimeMiddleware } from "../middlewares/verifyScheduleTime.middleware";
import { verifyRealEstateIdExistsMiddleware } from "../middlewares/verifyRealEstateIdExists.middleware";

export const scheduleRouter = Router();

scheduleRouter.post('/', verifyToken, validateBodyMiddleware(CreateScheduleSchema), verifyRealEstateIdExistsMiddleware, verifyScheduleTimeMiddleware, verifyUserScheduledMiddleware, createScheduleController);
scheduleRouter.get('/realEstate/:id', verifyToken, verifyAdmin, verifyRealEstateIdExistsMiddleware, readRealEstateSchedulesController);