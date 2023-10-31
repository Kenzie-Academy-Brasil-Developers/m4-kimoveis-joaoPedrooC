import { NextFunction, Request, Response } from 'express';
import { User } from '../entities';
import { userRepo } from '../repositories';
import { AppError } from '../errors/AppError.error';


export const verifyEmailExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const email = req.body.email;

  if(!email) {
    return next();
  }

  const user: User | null = await userRepo.findOneBy({ email });

  if(user) {
    throw new AppError('Email already exists', 409);
  }

  return next();
}