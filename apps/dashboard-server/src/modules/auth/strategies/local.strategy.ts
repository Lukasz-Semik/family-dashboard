import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(email: string, password: string): Promise<any> {
    const user = await this.authService.validateMember(email, password);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
