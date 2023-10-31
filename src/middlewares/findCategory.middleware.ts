import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoriesRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";

export const findCategoryMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params
  const category: Category | null = await categoriesRepo.findOne({ where: { id: Number(id) }, relations: { realEstate: true } });

  if(!category) {
    throw new AppError('Category not found', 404);
  }

  res.locals.category = category;
  return next();
}