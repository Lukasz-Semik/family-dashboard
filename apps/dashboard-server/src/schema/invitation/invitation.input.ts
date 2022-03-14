import { Field, InputType } from '@nestjs/graphql';

import {
  GTConfirmSignUpInvitationInput,
  GTConfirmUserInvitationInput,
  GTCreateSignUpInvitationInput,
  GTCreateUserInvitationInput,
  GTGender,
  GTInvitationDetails,
  GTMemberType,
  GTModulePermissions,
  GTPersonalDetails,
} from '@family-dashboard/global/types';

import { MemberSecurityDBModel } from '../../dbModels/member.dbModel';

@InputType()
export class InputCreateInvitationPersonalDetails implements GTPersonalDetails {
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => String) readonly dob: string;
  @Field(() => GTGender) readonly gender: GTGender;
}

@InputType()
export class InputCreateInvitationInvitationDetails
  implements GTInvitationDetails
{
  @Field(() => String) readonly familyName: string;
  @Field(() => String) readonly inviterEmail: string;
  @Field(() => String) readonly inviterName: string;
}

@InputType()
export class InputCreateSignUpInvitation
  implements GTCreateSignUpInvitationInput
{
  @Field(() => String) readonly email: string;
  @Field(() => InputCreateInvitationPersonalDetails)
  readonly personalDetails: GTPersonalDetails;
  @Field(() => InputCreateInvitationInvitationDetails)
  readonly details: GTInvitationDetails;
}

@InputType()
export class InputConfirmSignUpInvitation
  implements GTConfirmSignUpInvitationInput
{
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly password: string;
  @Field(() => InputCreateInvitationPersonalDetails)
  readonly personalDetails: GTPersonalDetails;
  @Field(() => String) readonly familyName: string;
  @Field(() => String) readonly code: string;
}

@InputType()
export class InputCreateUserInvitationModulePermissions
  implements GTModulePermissions
{
  @Field(() => Boolean) readonly hasFamilySettings: boolean;
  @Field(() => Boolean) readonly hasFinanacial: boolean;
}

@InputType()
export class InputCreateUserInvitation implements GTCreateUserInvitationInput {
  @Field(() => String) readonly email: string;
  @Field(() => InputCreateInvitationPersonalDetails)
  readonly personalDetails: GTPersonalDetails;
  @Field(() => InputCreateInvitationInvitationDetails)
  readonly details: GTInvitationDetails;
  @Field(() => GTMemberType) readonly memberType: GTMemberType;
  @Field(() => InputCreateUserInvitationModulePermissions)
  readonly modulePermissions: GTModulePermissions;
}

@InputType()
export class InputConfirmUserInvitation
  implements GTConfirmUserInvitationInput
{
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly password: string;
  @Field(() => InputCreateInvitationPersonalDetails)
  readonly personalDetails: GTPersonalDetails;
}
