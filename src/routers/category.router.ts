import { Router } from "express";
import { validateBodyMiddleware, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { CreateCategorySchema } from "../schemas/category.schema";
import { verifyCategoryExistsMiddleware } from "../middlewares/verifyCategoryExists.middleware";
import { createCategoryController, readBuildingsByCategoryController, readCategoriesController } from "../controllers/category.controller";
import { findCategoryMiddleware } from "../middlewares/findCategory.middleware";

export const categoryRouter = Router();

categoryRouter.post('/', verifyToken, verifyAdmin, validateBodyMiddleware(CreateCategorySchema), verifyCategoryExistsMiddleware, createCategoryController);
categoryRouter.get('/', readCategoriesController);
categoryRouter.get('/:id/realEstate', findCategoryMiddleware, readBuildingsByCategoryController);