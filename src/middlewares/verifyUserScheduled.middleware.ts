import { NextFunction, Request, Response } from "express";
import { realEstateRepo, scheduleRepo, userRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";
import { User } from "../entities";

export const verifyUserScheduledMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userId = res.locals.decoded.sub;

  const { hour, date, realEstateId } = req.body;

  const userSchedulesAtRealEstate = await scheduleRepo.find({
    where: {
      user: {
        id: userId
      },
      hour,
      date,
      realEstate: realEstateId
    }
  });

  const realEstateSchedules = await scheduleRepo.find({
    where: {
      hour,
      date,
      realEstate: realEstateId
    }
  })

  const userSchedules = await scheduleRepo.find({
    where: {
      user: {
        id: userId
      },
      hour,
      date
    }
  });

  if(userSchedulesAtRealEstate.length > 0 ) {
    throw new AppError('User schedule to this real estate at this date and time already exists', 409);
  } else if(userSchedules.length > 0 || realEstateSchedules.length > 0) {
    throw new AppError('Schedule to this real estate at this date and time already exists', 409);
  }
  
  return next();
}