import { Request, Response } from "express";
import { createScheduleService, readRealEstateSchedulesService } from "../services/schedule.service";

export const createScheduleController = async (req: Request, res: Response): Promise<Response> => {
  const { sub } = res.locals.decoded;
  
  await createScheduleService(req.body, Number(sub));

  return res.status(201).json({ message: 'Schedule created'});
}

export const readRealEstateSchedulesController = async (req: Request, res: Response): Promise<Response> => {
  const realEstateSchedules = await readRealEstateSchedulesService(Number(req.params.id));  

  return res.status(200).json(realEstateSchedules);
}