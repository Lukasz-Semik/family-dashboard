import { CTFamilyBaseData } from '@family-dashboard/common-types';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FamilyDto implements CTFamilyBaseData {
  @Field(() => ID) readonly id: string;
  @Field(() => String) readonly name: string;
}
