import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import { User } from "../entities";
import { AppError } from "../errors/AppError.error";

export const verifyUserExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const userId = Number(req.params.id);

  const user: User | null = await userRepo.findOneBy({ id: userId });
  
  if(!user || user.deletedAt) {
    throw new AppError('User not found', 404);
  }

  res.locals.user = user;
  return next();
}