import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.error";

export const verifyScheduleTimeMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { hour, date }: { hour: string, date: string } = req.body;
  
  let verifyHour = Number(hour.split(':').join(''));
  
  if(verifyHour < 800 || verifyHour > 1800) {
    throw new AppError('Invalid hour, available times are 8AM to 18PM');
  }

  const verifyDate = new Date(date).getDay();

  if(verifyDate === 0 || verifyDate === 6) {
    throw new AppError('Invalid date, work days are monday to friday');
  }
  
  return next();
}