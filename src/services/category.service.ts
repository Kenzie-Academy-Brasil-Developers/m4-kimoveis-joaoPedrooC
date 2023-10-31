import { Category } from "../entities";
import { CategoryCreateSchema, CategoriesList } from "../interfaces/category.interface";
import { categoriesRepo } from "../repositories";

export const createCategoryService = async (name: CategoryCreateSchema): Promise<Category> => {
  const newCategory: Category = categoriesRepo.create(name);
  await categoriesRepo.save(newCategory);

  return newCategory;
}

export const readCategoriesService = async (): Promise<CategoriesList> => {
  const categories: CategoriesList = await categoriesRepo.find();

  return categories;
}
