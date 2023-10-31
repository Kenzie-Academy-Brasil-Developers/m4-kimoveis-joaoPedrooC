import { Router } from "express";
import { userRouter } from "./user.router";
import { sessionRouter } from "./session.router";
import { realEstateRouter } from "./realEstates.router";
import { categoryRouter } from "./category.router";
import { scheduleRouter } from "./schedule.router";

export const router = Router();

router.use('/users', userRouter);
router.use('/login', sessionRouter);
router.use('/realEstate', realEstateRouter);
router.use('/categories', categoryRouter);
router.use('/schedules', scheduleRouter);