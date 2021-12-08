import { Field, InputType } from '@nestjs/graphql';

import {
  CTConfirmInvitationInput,
  CTCreateInvitationInput,
  CTGender,
} from '@family-dashboard/common-types';

@InputType()
export class CreateInvitationInput implements CTCreateInvitationInput {
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly inviterName: string;
  @Field(() => String, { nullable: true }) readonly firstName?: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String, { nullable: true }) readonly lastName?: string;
  @Field(() => Date, { nullable: true }) readonly dob?: Date;
  @Field(() => CTGender, { nullable: true }) readonly gender?: CTGender;
  @Field(() => String, { nullable: true }) readonly familyName?: string;
}

@InputType()
export class ConfirmInvitationInput implements CTConfirmInvitationInput {
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly password: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => Date) readonly dob: Date;
  @Field(() => CTGender) readonly gender: CTGender;
  @Field(() => String) readonly code: string;
  @Field(() => String) readonly familyName: string;
}
