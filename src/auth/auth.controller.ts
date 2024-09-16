import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, LogoutDto } from './dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async create(@Body() registerDto: RegisterDto) {
    return await this.authService.register(registerDto);
  }

  @Post('/login')
  async login(@Body() { email, password }: LoginDto) {
    return await this.authService.login(email, password);
  }
}
