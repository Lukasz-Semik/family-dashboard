import { Field, ObjectType } from '@nestjs/graphql';

import { GTGender, GTPersonalDetails } from '@family-dashboard/global/types';

@ObjectType()
export class DisplayPersonalDetails implements GTPersonalDetails {
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => String) readonly dob: string;
  @Field(() => GTGender) readonly gender: GTGender;
}
