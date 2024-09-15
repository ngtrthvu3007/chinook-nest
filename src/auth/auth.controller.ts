import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, LogoutDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }

  // @Post('logout')
  // logout(@Body() { email }: LogoutDto) {
  //   return this.authService.logout(email);
  // }
}

// definde user module
