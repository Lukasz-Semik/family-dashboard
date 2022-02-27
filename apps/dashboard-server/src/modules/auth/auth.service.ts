import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

import { splitHashKey } from '@family-dashboard/global/sdk';
import {
  CTTokenDecoded,
  GTMemberDBRecord,
} from '@family-dashboard/global/types';

import { throwError } from '../../helpers/throwError';
import { AuthDB } from './auth.db';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authDB: AuthDB
  ) {}

  async validateMember(email: string, pass: string): Promise<GTMemberDBRecord> {
    const member = await this.authDB.getMemberByEmail(email);

    if (!member) {
      return null;
    }

    const isMatch = await compare(pass, member.security.password);

    if (isMatch) {
      return member;
    }

    return null;
  }

  createToken(email: string, userFullKey: string, familyId: string) {
    const userId = splitHashKey(userFullKey).data;

    const payload = { email, sub: userId, familyId };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  decodeToken(token: string) {
    const data = this.jwtService.decode(token);

    return data as CTTokenDecoded;
  }

  async login(email: string, password: string) {
    const member = await this.validateMember(email, password);

    if (!member) {
      throwError('invalid login');
    }

    return this.createToken(member.email, member.fullKey, member.familyId);
  }
}
