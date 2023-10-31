import { Router } from "express";
import { CreateUserSchema, UpdateUserSchema } from "../schemas/user.schema";
import { createUserController, deleteUserController, readUsersController, updateUserController } from "../controllers/user.controller";
import { validateBodyMiddleware, validatePermissions, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyEmailExistsMiddleware } from "../middlewares/verifyEmailExists.middleware";
import { verifyUserExists } from "../middlewares/verifyUserExists.middleware";

export const userRouter = Router();

userRouter.post('/', validateBodyMiddleware(CreateUserSchema), verifyEmailExistsMiddleware, createUserController);
userRouter.get('/', verifyToken, validatePermissions, readUsersController);
userRouter.patch('/:id', verifyUserExists, verifyToken, validatePermissions, validateBodyMiddleware(UpdateUserSchema), verifyEmailExistsMiddleware, updateUserController);
userRouter.delete('/:id', verifyUserExists, verifyToken, verifyAdmin, deleteUserController);