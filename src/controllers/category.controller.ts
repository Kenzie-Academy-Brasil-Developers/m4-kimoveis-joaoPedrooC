import { Request, Response } from "express";
import { createCategoryService, readCategoriesService } from "../services/category.service";
import { CategoriesList } from "../interfaces/category.interface";
import { Category } from "../entities";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
  const newCategory = await createCategoryService(req.body);

  return res.status(201).json(newCategory);
}

export const readCategoriesController = async (req: Request, res: Response): Promise<Response> => {
  const categories: CategoriesList = await readCategoriesService();

  return res.status(200).json(categories);
}

export const readBuildingsByCategoryController = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = res.locals.category;

  return res.status(200).json(category);
}