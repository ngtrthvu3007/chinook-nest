import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities/users.entity';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersService {
  private userRepository;

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(UserEntity);
  }

  async getUserDetailBy(
    field: keyof UserEntity,
    value: string | number,
  ): Promise<UserEntity | null> {
    return this.userRepository.findOne({
      where: { [field]: value },
    });
  }
}
