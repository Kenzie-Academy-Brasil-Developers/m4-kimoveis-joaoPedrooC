import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./Categories.entity";
import { Address } from "./Adresses.entity";
import { Schedule } from "./Schedules.entity";

@Entity('realEstates')
export class RealEstate {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ default: false })
  sold: boolean;

  @Column({ type: 'decimal', default: 0, precision: 12, scale: 2 })
  value: number | string;

  @Column({ type: 'integer' })
  size: number;

  @CreateDateColumn({ type: 'date' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: Date;

  @ManyToOne(() => Category, (category) => category.realEstate)
  @JoinColumn()
  category: Category;

  @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
  schedules: Schedule[];

  @OneToOne(() => Address)
  @JoinColumn()
  address: Address;
}