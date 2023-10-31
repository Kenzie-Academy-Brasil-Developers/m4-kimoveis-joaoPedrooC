import { z } from 'zod';
import { CreateUserSchema, UserSchemaReturnWithoutPassword, ReadUsersSchema, UserSchema, UpdateUserSchema } from '../schemas/user.schema';

export type User = z.infer<typeof UserSchema>;
export type CreateUser = z.infer<typeof CreateUserSchema>;
export type CreateUserReturn = z.infer<typeof UserSchemaReturnWithoutPassword>;
export type ReadUsers = z.infer<typeof ReadUsersSchema>;
export type UpdateUser = z.infer<typeof UpdateUserSchema>