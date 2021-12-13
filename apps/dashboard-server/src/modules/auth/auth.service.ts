import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcryptjs';
import { Repository } from 'typeorm';

import { UserEntity } from '../../entities/user.entity';
import { throwError } from '../../helpers/throwError';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, pass: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ email });

    if (!user || !user) {
      return null;
    }

    const isMatch = await compare(pass, user.password);

    if (isMatch) {
      return user;
    }

    return null;
  }

  createToken(email: string, userId: string) {
    const payload = { email, sub: userId };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);

    if (!user) {
      // TODO: check all throws
      throwError('msg');
    }

    return this.createToken(user.email, user.id);
  }
}
