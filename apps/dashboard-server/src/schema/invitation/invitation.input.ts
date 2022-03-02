import { Field, InputType } from '@nestjs/graphql';

import {
  CTGender,
  CTInvitationCreateInput,
  CTInvitationSignUpConfirmInput,
  CTInvitationSignUpCreateInput,
  CTInvitationUserConfirmInput,
  CTMemberType,
  CTUserModulePermission,
  GTGender,
  GTConfirmSignUpInvitationInput,
  GTCreateSignUpInvitationInput,
  GTCreateUserInvitationInput,
  GTInvitationDetailsDBRecord,
  GTModulePermissionsDisplay,
  GTMemberSecurityDBRecord,
  GTMemberType,
  GTPersonalDetailsDisplay,
  GTConfirmUserInvitationInput,
} from '@family-dashboard/global/types';

@InputType()
export class InvitationCreateInput implements CTInvitationCreateInput {
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly inviterName: string;
  @Field(() => CTMemberType)
  readonly memberType: CTMemberType;
  @Field(() => [CTUserModulePermission])
  readonly modulePermissions: CTUserModulePermission[];
  @Field(() => String, { nullable: true }) readonly firstName?: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String, { nullable: true }) readonly lastName?: string;
  @Field(() => Date, { nullable: true }) readonly dob?: Date;
  @Field(() => CTGender, { nullable: true }) readonly gender?: CTGender;
}

@InputType()
export class InvitationSignUpCreateInput
  implements CTInvitationSignUpCreateInput
{
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly inviterName: string;
  @Field(() => String) readonly familyName: string;
  @Field(() => String, { nullable: true }) readonly firstName?: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String, { nullable: true }) readonly lastName?: string;
  @Field(() => Date, { nullable: true }) readonly dob?: Date;
  @Field(() => CTGender, { nullable: true }) readonly gender?: CTGender;
}

@InputType()
export class InvitationSignUpConfirmInput
  implements CTInvitationSignUpConfirmInput
{
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly password: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => Date) readonly dob: Date;
  @Field(() => CTGender) readonly gender: CTGender;
  @Field(() => String) readonly code: string;
}

@InputType()
export class InvitationUserConfirmInput
  implements CTInvitationUserConfirmInput
{
  @Field(() => String) readonly password: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => Date) readonly dob: Date;
  @Field(() => CTGender) readonly gender: CTGender;
}

// V2
@InputType()
export class InputCreateInvitationPersonalDetails
  implements GTPersonalDetailsDisplay
{
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => String) readonly dob: string;
  @Field(() => GTGender) readonly gender: GTGender;
}

type CreateInvitationInvitationDetails = Omit<
  GTInvitationDetailsDBRecord,
  'code' | 'validTo'
>;

@InputType()
export class InputCreateInvitationInvitationDetails
  implements CreateInvitationInvitationDetails
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
  readonly personalDetails: GTPersonalDetailsDisplay;
  @Field(() => InputCreateInvitationInvitationDetails)
  readonly invitationDetails: CreateInvitationInvitationDetails;
}

type ConfirmSignUpInvitationInvitationDetails = Omit<
  GTInvitationDetailsDBRecord,
  'validTo' | 'inviterEmail' | 'inviterName'
>;

@InputType()
export class InputConfirmSignUpInvitationInvitationDetails
  implements ConfirmSignUpInvitationInvitationDetails
{
  @Field(() => String) readonly familyName: string;
  @Field(() => String) readonly code: string;
}

@InputType()
export class InputConfrimSignUpInvitationSecurity
  implements GTMemberSecurityDBRecord
{
  @Field(() => String) readonly password: string;
}

@InputType()
export class InputConfirmSignUpInvitation
  implements GTConfirmSignUpInvitationInput
{
  @Field(() => String) readonly email: string;
  @Field(() => InputConfrimSignUpInvitationSecurity)
  readonly security: GTMemberSecurityDBRecord;
  @Field(() => InputCreateInvitationPersonalDetails)
  readonly personalDetails: GTPersonalDetailsDisplay;
  @Field(() => InputConfirmSignUpInvitationInvitationDetails)
  readonly invitationDetails: ConfirmSignUpInvitationInvitationDetails;
}

@InputType()
export class InputCreateUserInvitationModulePermissions
  implements GTModulePermissionsDisplay
{
  @Field(() => Boolean) readonly hasFamilySettings: boolean;
  @Field(() => Boolean) readonly hasFinanacial: boolean;
}

@InputType()
export class InputCreateUserInvitation implements GTCreateUserInvitationInput {
  @Field(() => String) readonly email: string;
  @Field(() => InputCreateInvitationPersonalDetails)
  readonly personalDetails: GTPersonalDetailsDisplay;
  @Field(() => InputCreateInvitationInvitationDetails)
  readonly invitationDetails: CreateInvitationInvitationDetails;
  @Field(() => GTMemberType) readonly memberType: GTMemberType;
  @Field(() => InputCreateUserInvitationModulePermissions)
  readonly modulePermissions: GTModulePermissionsDisplay;
}

@InputType()
export class InputConfirmUserInvitation
  implements GTConfirmUserInvitationInput
{
  @Field(() => String) readonly email: string;
  @Field(() => InputConfrimSignUpInvitationSecurity)
  readonly security: GTMemberSecurityDBRecord;
  @Field(() => InputCreateInvitationPersonalDetails)
  readonly personalDetails: GTPersonalDetailsDisplay;
}
