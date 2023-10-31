import { z } from "zod";
import { CreateRealEstatePayloadSchema } from "../schemas/realEstate.schema";
import { RealEstate } from "../entities";

export type CreateRealEstatePayload = z.infer<typeof CreateRealEstatePayloadSchema>;

export type RealEstateRead = Array<RealEstate>;