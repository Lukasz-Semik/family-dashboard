import { Field, ID, ObjectType } from '@nestjs/graphql';

import { CTFamilyBaseData } from '@family-dashboard/global/types';

@ObjectType()
export class FamilyDto implements CTFamilyBaseData {
  @Field(() => ID) readonly id: string;
  @Field(() => String) readonly name: string;
}
