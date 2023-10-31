import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().max(45),
  email: z.string().email().max(45),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  deletedAt: z.date().or(z.string()).nullable()
});

export const CreateUserSchema = UserSchema.pick({ name: true, email: true, password: true, admin: true });
export const UserSchemaReturnWithoutPassword = UserSchema.omit({ password: true });
export const ReadUsersSchema = UserSchemaReturnWithoutPassword.array();
export const UpdateUserOmitsSchema = UserSchema.omit({ id: true, admin: true });
export const UpdateUserSchema = UpdateUserOmitsSchema.partial();