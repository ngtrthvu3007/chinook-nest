import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn({ name: 'UserId' })
  UserId: number;

  @Column({ name: 'Name', type: 'varchar', length: 120, nullable: false })
  Name: string;

  @Column({
    name: 'Email',
    type: 'varchar',
    length: 120,
    nullable: false,
    unique: true,
  })
  Email: string;

  @Column({ name: 'Password', type: 'varchar', length: 120, nullable: false })
  Password: string;
}
