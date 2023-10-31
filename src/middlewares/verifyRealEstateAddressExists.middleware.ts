import { NextFunction, Request, Response } from "express";
import { addressRepo } from "../repositories";
import { CreateRealEstatePayload } from "../interfaces/realEstate.interface";
import { AppError } from "../errors/AppError.error";

export const verifyRealEstateAddressExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const reqAddress: CreateRealEstatePayload = req.body;

  const findAddress = await addressRepo.findOne({
    where: {
      street: reqAddress.address.street,
      number: reqAddress.address.number
    }
  });

  if(!findAddress) {
    return next();
  }

  throw new AppError('Address already exists', 409);
}