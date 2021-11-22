import { CTFamilyBaseData } from '@family-dashboard/common-types';

import { FamilyEntity } from '../entities/family.entity';

export const serializeFamily = (family: FamilyEntity): CTFamilyBaseData => {
  return {
    id: family.id,
    name: family.name,
  };
};
