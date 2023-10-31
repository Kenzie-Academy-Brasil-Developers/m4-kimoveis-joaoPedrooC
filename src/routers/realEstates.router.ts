import { Router } from "express";
import { validateBodyMiddleware, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { CreateRealEstatePayloadSchema } from "../schemas/realEstate.schema";
import { createRealEstateController, readRealEstatesController } from "../controllers/realEstates.controller";
import { verifyRealEstateAddressExistsMiddleware } from "../middlewares/verifyRealEstateAddressExists.middleware";

export const realEstateRouter = Router();

realEstateRouter.post('/', verifyToken, verifyAdmin, validateBodyMiddleware(CreateRealEstatePayloadSchema), verifyRealEstateAddressExistsMiddleware, createRealEstateController);
realEstateRouter.get('/', readRealEstatesController);