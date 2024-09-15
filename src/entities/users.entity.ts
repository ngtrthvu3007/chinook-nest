import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn()
  UserId: number;

  @Column({ type: 'varchar', length: 120, nullable: false })
  Name: string;

  @Column({ type: 'varchar', length: 120, nullable: false, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 120, nullable: false })
  password: string;
}
