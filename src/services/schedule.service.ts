import { RealEstate, Schedule, User } from "../entities";
import { ScheduleCreate } from "../interfaces/schedule.interface";
import { realEstateRepo, scheduleRepo, userRepo } from "../repositories";

export const createScheduleService = async (payload: ScheduleCreate, userId: number): Promise<Schedule> => {
  const user: User | null = await userRepo.findOneBy({ id: userId });
  const realEstate: RealEstate | null = await realEstateRepo.findOneBy({ id: payload.realEstateId });
  
  const newSchedule = scheduleRepo.create({ ...payload, user: user!, realEstate:realEstate! });
  await scheduleRepo.save(newSchedule);

  return newSchedule;
}

export const readRealEstateSchedulesService = async (realEstateId: number) => {
  const realEstatesSchedules = await realEstateRepo.findOne({
    where: { id: realEstateId },
    relations: {
      schedules: {
        user: true
      },
      category: true,
      address: true
    }
  });
  
  return realEstatesSchedules;
}