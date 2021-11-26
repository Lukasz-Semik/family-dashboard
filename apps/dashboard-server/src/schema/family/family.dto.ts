import { Field, ID, ObjectType } from '@nestjs/graphql';

import { CTFamilyBaseData } from '@family-dashboard/common-types';

@ObjectType()
export class FamilyDto implements CTFamilyBaseData {
  @Field(() => ID) readonly id: string;
  @Field(() => String) readonly name: string;
}
