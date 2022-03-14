import { Field, ObjectType } from '@nestjs/graphql';

import {
  GTInvitation,
  GTInvitationDetails,
  GTPersonalDetails,
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
export class DisplayInvitationInvitationDetails implements GTInvitationDetails {
  @Field(() => String) readonly familyName: string;
  @Field(() => String) readonly inviterEmail: string;
  @Field(() => String) readonly inviterName: string;
}

@ObjectType()
export class DisplayInvitation implements GTInvitation {
  @Field(() => String) readonly fullKey: string;
  @Field(() => String) readonly familyId: string;
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly validTo: string;
  @Field(() => DisplayInvitationInvitationDetails)
  readonly details: GTInvitationDetails;
  @Field(() => DisplayPersonalDetails)
  readonly personalDetails: GTPersonalDetails;
}
