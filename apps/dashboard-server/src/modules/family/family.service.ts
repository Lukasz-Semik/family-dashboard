import { Injectable } from '@nestjs/common';

import { GTFamily } from '@family-dashboard/global/types';

import { throwError } from '../../helpers/throwError';
import { FamilyDB } from './family.db';

@Injectable()
export class FamilyService {
  constructor(private readonly familyDB: FamilyDB) {}

  async getFamilyDisplay(
    familyId: string,
    currentUserId: string
  ): Promise<GTFamily> {
    try {
      const family = await this.familyDB.getFamilyDisplay(
        familyId,
        currentUserId
      );

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
