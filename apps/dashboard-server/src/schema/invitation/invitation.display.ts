import { Field, ObjectType } from '@nestjs/graphql';

import {
  CTGender,
  CTInvitationDisplayData,
  CTInvitationUserPersonalDetailsData,
  CTVerifyEmailResponse,
  CTVerifyEmailResponseStatus,
  GTInvitationDetailsDisplay,
  GTInvitationDisplay,
  GTPersonalDetailsDisplay,
  GTVerifyEmailResponse,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

import { DisplayPersonalDetails } from '../misc/misc.display';

@ObjectType()
export class VerifyEmailDto implements CTVerifyEmailResponse {
  @Field(() => CTVerifyEmailResponseStatus)
  readonly status: CTVerifyEmailResponseStatus;
  @Field(() => String, { nullable: true }) readonly inviterName?: string;
}

@ObjectType()
export class InvitationDto implements CTInvitationDisplayData {
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => Date) readonly validTo: Date;
}

@ObjectType()
export class InvitationUserPersonalDetailsDto
  implements CTInvitationUserPersonalDetailsData
{
  @Field(() => String) readonly inviterName: string;
  @Field(() => String) readonly familyName: string;
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => String) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => Date) readonly dob: Date;
  @Field(() => CTGender) readonly gender: CTGender;
}

// V2
@ObjectType()
export class DisplayVerifyEmailResponse implements GTVerifyEmailResponse {
  @Field(() => GTVerifyEmailStatus)
  readonly status: GTVerifyEmailStatus;
  @Field(() => String, { nullable: true }) readonly inviterName?: string;
}

@ObjectType()
export class DisplayInvitationInvitationDetails
  implements GTInvitationDetailsDisplay
{
  @Field(() => String) readonly familyName: string;
  @Field(() => String) readonly inviterEmail: string;
  @Field(() => String) readonly inviterName: string;
  @Field(() => String) readonly validTo: string;
}

@ObjectType()
export class DisplayInvitation implements GTInvitationDisplay {
  @Field(() => String) readonly fullKey: string;
  @Field(() => String) readonly familyId: string;
  @Field(() => String) readonly email: string;
  @Field(() => DisplayInvitationInvitationDetails)
  readonly invitationDetails: GTInvitationDetailsDisplay;
  @Field(() => DisplayPersonalDetails)
  readonly personalDetails: GTPersonalDetailsDisplay;
}
