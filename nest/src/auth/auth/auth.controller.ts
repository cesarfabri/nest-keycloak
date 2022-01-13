import { JwtGuard } from './jwt.guard';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() body) {
    return this.authService.login(body.username, body.password);
  }

  // @Role('admin') retirado do original
  // @UseGuards(JwtGuard, RoleGuard)
  @UseGuards(JwtGuard)
  @Get('test-auth')
  test(@Req() req) {
    console.log(req.user);
    return {
      name: 'Cesar',
    };
  }
}
