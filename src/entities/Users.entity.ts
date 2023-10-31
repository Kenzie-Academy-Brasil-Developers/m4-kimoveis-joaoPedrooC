import { getRounds, hashSync } from "bcryptjs";
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 45})
  name: string;

  @Column({ type: 'varchar', length: 45, unique: true })
  email: string;

  @Column({ default: false })
  admin: boolean;

  @Column({ type: 'varchar', length: 120 })
  password: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @UpdateDateColumn({ type: 'date' })
  updatedAt: string;

  @DeleteDateColumn({ type: 'date', nullable: true })
  deletedAt: string | null;

  @BeforeInsert()
  updateCreateValues() {
    const isHashed = getRounds(this.password);

    if(!isHashed) {
      this.password = hashSync(this.password, 10);
    }
  }

  @BeforeUpdate()
  updateEditingValues() {
    const isHashed = getRounds(this.password);

    if(!isHashed) {
      this.password = hashSync(this.password, 10);
    }
  }
}