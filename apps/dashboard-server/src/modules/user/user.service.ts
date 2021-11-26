import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CTGender } from '@family-dashboard/common-types';

import { UserEntity } from '../../entities/user.entity';
import { throwError } from '../../helpers/throwError';
import { InitialAppStateDto } from '../../schema';
import { serializeFamily } from '../../serializators/family.serializator';
import { serializeCurrentUser } from '../../serializators/user.serializator';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async getUserInitialAppState(id: string): Promise<InitialAppStateDto> {
    try {
      const foundUser = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.family', 'family')
        .where('user.id = :id', { id })
        .getOne();

      if (!foundUser) {
        throwError(HttpStatus.NOT_FOUND, { msg: 'user not exists' });
      }

      return {
        currentUser: serializeCurrentUser(foundUser),
        family: serializeFamily(foundUser.family),
      };
    } catch (err) {
      console.log(err);
      throwError(HttpStatus.INTERNAL_SERVER_ERROR, err);
    }
  }
}
