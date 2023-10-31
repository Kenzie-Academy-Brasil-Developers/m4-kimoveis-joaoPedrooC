import { userRepo } from "../repositories";
import { AppError } from "../errors/AppError.error";
import { compareSync } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { Login, LoginReturn } from "../interfaces/session.interface";

export const loginService = async (payload: Login): Promise<LoginReturn> => {
  const findUser = await userRepo.findOneBy({ email: payload.email });

  if(!findUser || findUser.deletedAt) {
    throw new AppError('Invalid credentials', 401);
  }

  const verifyPass = compareSync(payload.password, findUser.password);

  if(!verifyPass) {
    throw new AppError('Invalid credentials', 401);
  }

  const token = sign(
    {email: findUser.email, admin: findUser.admin },
    process.env.SECRET_KEY!,
    {expiresIn: process.env.EXPIRES_IN!, subject: findUser.id.toString()}
  );

  return { token };
}