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

  async getFamilyWithAllMembers(familyId: string): Promise<FamilyEntity> {
    try {
      const foundFamily = await this.familyRepository
        .createQueryBuilder('family')
        .leftJoinAndSelect('family.users', 'users')
        .leftJoinAndSelect('family.invitations', 'invitations')
        .where('family.id = :id', { id: familyId })
        .getOne();

      if (!foundFamily) {
        throwError('user not exists');
      }

      return foundFamily;
    } catch (err) {
      throwError(err.message);
    }
  }
}
