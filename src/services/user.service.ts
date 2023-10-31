import { DeepPartial } from "typeorm";
import { User } from "../entities";
import { CreateUser, CreateUserReturn, ReadUsers, UpdateUser } from "../interfaces/user.interface";
import { userRepo } from "../repositories";
import { ReadUsersSchema, UserSchemaReturnWithoutPassword } from "../schemas/user.schema";

export const createUserService = async (payload: CreateUser): Promise<CreateUserReturn> => {
  const newUser: User = userRepo.create(payload);
  await userRepo.save(newUser);

  return UserSchemaReturnWithoutPassword.parse(newUser);
}

export const readUsersService = async (): Promise<ReadUsers> => {
  const usersList: User[] = await userRepo.find();

  return ReadUsersSchema.parse(usersList);
}

export const updateUserService = async (payload: DeepPartial<User>, updatingUser: User): Promise<CreateUserReturn> => {
  const updatedUser: User = userRepo.create({ ...updatingUser, ...payload });
  await userRepo.save(updatedUser);

  return UserSchemaReturnWithoutPassword.parse(updatedUser);
}

export const deleteUserService = async (user: User): Promise<void> => {
  await userRepo.softRemove(user)
}