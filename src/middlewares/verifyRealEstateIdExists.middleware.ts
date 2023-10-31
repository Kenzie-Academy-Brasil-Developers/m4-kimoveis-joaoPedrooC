import { NextFunction, Request, Response } from "express";
import { RealEstate } from "../entities";
import { realEstateRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";

export const verifyRealEstateIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const realEstateId = req.body.realEstateId ? req.body.realEstateId : req.params.id;

  const realEstate: RealEstate | null = await realEstateRepo.findOneBy({ id: realEstateId });

  if(!realEstate) {
    throw new AppError('RealEstate not found', 404);
  }

  return next();
}