import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./Users.entity";
import { RealEstate } from "./RealStates.entity";

@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  date: string;
  
  @Column()
  hour: string;

  @ManyToOne(() => User)
  @JoinColumn()
  user: User;

  @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
  @JoinColumn()
  realEstate: RealEstate;
}