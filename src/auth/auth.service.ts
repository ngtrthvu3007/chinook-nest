import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { AuthEntity } from 'src/entities/auth.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { UserEntity } from 'src/entities/users.entity';
import { DataSource } from 'typeorm';

export const roundsOfHashing = 10;

@Injectable()
export class AuthService {
  private userRepository;
  constructor(
    private dataSource: DataSource,
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {
    this.userRepository = this.dataSource.getRepository(UserEntity);
  }

  async register(registerDto: RegisterDto): Promise<UserEntity> {
    const hashedPassword = await bcrypt.hash(
      registerDto.password,
      roundsOfHashing,
    );

    const newUser = this.userRepository.create({
      Name: registerDto.name,
      Email: registerDto.email,
      Password: hashedPassword,
    });
    return await this.userRepository.save(newUser);
  }

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.usersService.getUserDetailBy('Email', email);

    if (!user) throw new NotFoundException(`No user found for email: ${email}`);

    const isPasswordValid = await bcrypt.compare(password, user.Password);

    // chưa handle error
    if (!isPasswordValid) throw new UnauthorizedException('Invalid password');

    return {
      accessToken: this.jwtService.sign({ UserId: user.UserId }),
      message: 'Login success',
    };
  }
}
