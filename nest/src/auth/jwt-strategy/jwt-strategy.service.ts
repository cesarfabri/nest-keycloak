import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload) {
    // console.log(payload.resource_access.nest.roles)
    return {
      userId: payload.sub,
      subdomain: payload.subdomain,
      role: payload.resource_access.nest.roles
    };
    // delimitar as informações do payload
    // return { userId: payload.sub,
    // username: payload.preferred_username etc...}
  }
}
