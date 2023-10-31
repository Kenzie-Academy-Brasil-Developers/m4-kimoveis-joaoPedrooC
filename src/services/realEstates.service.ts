import { Address, Category, RealEstate } from "../entities";
import { CreateRealEstatePayload, RealEstateRead } from "../interfaces/realEstate.interface";
import { addressRepo, categoriesRepo, realEstateRepo } from "../repositories";

export const createRealEstateService = async (payload: CreateRealEstatePayload) => {
  const newAddress: Address = addressRepo.create(payload.address);
  await addressRepo.save(newAddress);

  const category: Category | null = await categoriesRepo.findOneBy({ id: payload.categoryId });

  const newRealEstate = { ...payload, address: newAddress, category: category! };

  const realEstateCreate: RealEstate = realEstateRepo.create(newRealEstate);
  await realEstateRepo.save(realEstateCreate);

  return realEstateCreate;
}

export const readRealEstatesService = async (): Promise<RealEstateRead> => {
  return await realEstateRepo.find({ relations: { address: true } });
}