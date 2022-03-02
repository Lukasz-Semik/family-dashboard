import { Field, ObjectType } from '@nestjs/graphql';

import {
  GTInvitationDetailsDisplay,
  GTInvitationDisplay,
  GTPersonalDetailsDisplay,
  GTVerifyEmailResponse,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

import { DisplayPersonalDetails } from '../misc/misc.display';

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
