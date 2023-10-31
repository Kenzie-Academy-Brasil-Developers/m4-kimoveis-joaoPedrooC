import { z } from "zod";
import { CategorySchema, CreateCategorySchema } from "../schemas/category.schema";

export type Category = z.infer<typeof CategorySchema>;
export type CategoryCreateSchema = z.infer<typeof CreateCategorySchema>;
export type CategoriesList = Array<Category>;