import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { JwtStrategyService } from './jwt-strategy/jwt-strategy.service';

@Module({
  imports: [
    HttpModule,
    JwtModule.register({
<<<<<<< HEAD
      secret: 'WHn9ZPXp3WjLbItLci61xqenGEnZSko5',
=======
      secret: process.env.CLIENT_SECRET,
>>>>>>> 3b67fe7 (Refact(auth) Adjustments in the security)
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategyService],
})
export class AuthModule {}
