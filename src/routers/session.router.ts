import { Router } from "express";
import { validateBodyMiddleware, verifyToken } from "../middlewares/globals.middleware";
import { SessionSchema } from "../schemas/session.schema";
import { loginController } from "../controllers/session.controller";

export const sessionRouter = Router();

sessionRouter.post('/', validateBodyMiddleware(SessionSchema), loginController);