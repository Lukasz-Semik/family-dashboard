import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FamilyEntity } from '../../entities/family.entity';
import { UserEntity } from '../../entities/user.entity';
import { throwError } from '../../helpers/throwError';

interface GetUserInitialAppStateResult {
  foundFamily: FamilyEntity;
  foundUser: UserEntity;
}
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FamilyEntity)
    private readonly familyRepository: Repository<FamilyEntity>
  ) {}

  async getUserInitialAppState(
    id: string
  ): Promise<GetUserInitialAppStateResult> {
    try {
      const foundUser = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.family', 'family')
        .where('user.id = :id', { id })
        .getOne();

      if (!foundUser) {
        throwError('user not exists');
      }

      return {
        foundUser,
        foundFamily: foundUser.family,
      };
    } catch (err) {
      throwError(err.message);
    }
  }
}
