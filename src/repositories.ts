import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";

export const userRepo = AppDataSource.getRepository(User);
export const realEstateRepo = AppDataSource.getRepository(RealEstate);
export const addressRepo = AppDataSource.getRepository(Address);
export const categoriesRepo = AppDataSource.getRepository(Category);
export const scheduleRepo = AppDataSource.getRepository(Schedule);