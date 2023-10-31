import { z } from 'zod';
import { SessionSchema } from '../schemas/session.schema';

export type Login = z.infer<typeof SessionSchema>;
export type LoginReturn = { token: string };