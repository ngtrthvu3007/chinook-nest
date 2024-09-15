import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { AuthEntity } from 'src/entities/auth.entity';
import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private userRepository;
  private jwtService: JwtService;

  constructor(private dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(AuthEntity);
  }

  async login(email: string, password: string): Promise<AuthEntity> {
    // Step 1: Fetch a user with the given email
    const user = await this.userRepository.findUserByEmail(email);

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Step 3: Generate a JWT containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
      message: 'Login success',
    };
  }

  // async logout(email: string): Promise<any> {
  //   return await this.userRepository.findOne({
  //     where: { AlbumId },
  //     relations: ['Artist'],
  //   });
  // }
}
