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
    const user = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.family', 'family.id')
      // .leftJoinAndSelect('user.family', 'family.users')
      .where('user.email = :email', { email })
      .getOne();

    if (!user) {
      return null;
    }

    const isMatch = await compare(pass, user.password);

    if (isMatch) {
      return user;
    }

    return null;
  }

  createToken(email: string, userId: string, familyId: string) {
    const payload = { email, sub: userId, familyId };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);

    if (!user) {
      throwError('invalid login');
    }

    return this.createToken(user.email, user.id, user.family.id);
  }
}
