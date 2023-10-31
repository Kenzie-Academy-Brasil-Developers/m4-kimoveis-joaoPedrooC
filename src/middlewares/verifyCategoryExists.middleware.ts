import { NextFunction, Request, Response } from "express";
import { categoriesRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";

export const verifyCategoryExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const categoryName = req.body.name;
  const findCategory = await categoriesRepo.findOneBy({ name: categoryName });

  if(!findCategory) {
    return next();
  }

  throw new AppError('Category already exists', 409);
}