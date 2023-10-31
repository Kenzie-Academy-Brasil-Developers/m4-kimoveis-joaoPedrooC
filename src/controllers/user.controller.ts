import { Request, Response } from "express";
import { createUserService, deleteUserService, readUsersService, updateUserService } from "../services/user.service";
import { ReadUsers } from "../interfaces/user.interface";
import { User } from "../entities";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const newUser = await createUserService(req.body);

  return res.status(201).json(newUser);
}

export const readUsersController = async (req: Request, res: Response): Promise<Response> => {
  const usersList: ReadUsers | undefined = await readUsersService();

  return res.status(200).json(usersList);
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  const updatingUser: User = res.locals.user;
  
  const updatedUser = await updateUserService(req.body, updatingUser);

  return res.status(200).json(updatedUser);
}

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  const { user } = res.locals;
  
  await deleteUserService(user);

  return res.status(204).json();
}