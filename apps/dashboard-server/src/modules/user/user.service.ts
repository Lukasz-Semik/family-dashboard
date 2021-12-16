import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from '../../entities/user.entity';
import { throwError } from '../../helpers/throwError';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async getUserInitialAppState(id: string): Promise<UserEntity> {
    try {
      const foundUser = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.family', 'family')
        .where('user.id = :id', { id })
        .getOne();

      if (!foundUser) {
        throwError('user not exists');
      }

      return foundUser;
    } catch (err) {
      throwError(err.message);
    }
  }
}
