import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GTFamilyDisplay } from '@family-dashboard/global/types';

import { FamilyEntity } from '../../entities/family.entity';
import { throwError } from '../../helpers/throwError';
import { FamilyDB } from './family.db';

@Injectable()
export class FamilyService {
  constructor(
    @InjectRepository(FamilyEntity)
    private readonly familyRepository: Repository<FamilyEntity>,
    private readonly familyDB: FamilyDB
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

  async getFamilyDisplay(
    familyId: string,
    currentUserId: string
  ): Promise<GTFamilyDisplay> {
    try {
      const family = await this.familyDB.getFamilyDisplay(
        familyId,
        currentUserId
      );
      console.log(family);
      if (!family) {
        // TODO: fix error
        throwError('Family not exists');
      }

      return family;
    } catch (err) {
      throwError(err.message);
    }
  }
}
