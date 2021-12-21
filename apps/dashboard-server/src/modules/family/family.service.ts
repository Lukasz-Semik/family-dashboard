import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { FamilyEntity } from '../../entities/family.entity';
import { UserEntity } from '../../entities/user.entity';
import { throwError } from '../../helpers/throwError';

@Injectable()
export class FamilyService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(FamilyEntity)
    private readonly familyRepository: Repository<FamilyEntity>
  ) {}

  async getFamilyWithAllMembers(id: string): Promise<FamilyEntity> {
    try {
      // HERE!
      const foundUser = await this.userRepository
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.family', 'family')
        // .leftJoinAndSelect('user.family', 'family.users')
        .where('user.id = :id', { id })
        .getOne();

      console.log(foundUser);
      if (!foundUser) {
        throwError('user not exists');
      }

      return foundUser.family;
    } catch (err) {
      throwError(err.message);
    }
  }
}
