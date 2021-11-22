import {
  CreateInvitationInput as CreateInvitationInputType,
  CTConfirmInvitationInput as CTConfirmInvitationInputType,
  CTGender,
} from '@family-dashboard/common-types';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateInvitationInput implements CreateInvitationInputType {
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly inviterName: string;
  @Field(() => String, { nullable: true }) readonly firstName?: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String, { nullable: true }) readonly lastName?: string;
  @Field(() => Date, { nullable: true }) readonly dob?: Date;
  @Field(() => CTGender, { nullable: true }) readonly gender?: CTGender;
}

@InputType()
export class CTConfirmInvitationInput implements CTConfirmInvitationInputType {
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
