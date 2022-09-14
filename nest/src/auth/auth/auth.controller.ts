import { JwtGuard } from './jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RoleGuard } from '../role.guard';
import { Role } from '../role.decorator';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }

  // @Role('admin') retirado do original
  // @UseGuards(JwtGuard, RoleGuard)
  @Role('desenvolvimento')
  @UseGuards(JwtGuard, RoleGuard)
  @Get('test-auth')
  test(@Req() req) {
    const user = req.user
    console.log(req.user);
    return {
      user,
    };
  }
}
