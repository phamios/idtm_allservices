import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
@Entity({ name: `User` })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}
