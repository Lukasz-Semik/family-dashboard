import { Field, ObjectType } from '@nestjs/graphql';

import {
  GTGender,
  GTPersonalDetailsDisplay,
} from '@family-dashboard/global/types';

@ObjectType()
export class DisplayPersonalDetails implements GTPersonalDetailsDisplay {
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => String) readonly dob: string;
  @Field(() => GTGender) readonly gender: GTGender;
}
