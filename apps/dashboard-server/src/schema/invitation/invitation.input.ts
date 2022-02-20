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
  GTInputConfirmSignUpInvitation,
  GTInputCreateSignUpInvitation,
  GTInvitationDetails,
  GTMemberSecurity,
  GTPersonalDetails,
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
export class InputCreateSignUpInvitationPersonalDetails
  implements GTPersonalDetails
{
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => String) readonly dob: string;
  @Field(() => GTGender) readonly gender: GTGender;
}

type CreateSignUpInvitationInvitationDetails = Omit<
  GTInvitationDetails,
  'code' | 'validTo'
>;

@InputType()
export class InputCreateSignUpInvitationInvitationDetails
  implements CreateSignUpInvitationInvitationDetails
{
  @Field(() => String) readonly familyName: string;
  @Field(() => String) readonly inviterEmail: string;
  @Field(() => String) readonly inviterName: string;
}

@InputType()
export class InputCreateSignUpInvitation
  implements GTInputCreateSignUpInvitation
{
  @Field(() => String) readonly email: string;
  @Field(() => InputCreateSignUpInvitationPersonalDetails)
  readonly personalDetails: GTPersonalDetails;
  @Field(() => InputCreateSignUpInvitationInvitationDetails)
  readonly invitationDetails: CreateSignUpInvitationInvitationDetails;
}

type ConfirmSignUpInvitationInvitationDetails = Omit<
  GTInvitationDetails,
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
export class InputConfrimSignUpInvitationSecurity implements GTMemberSecurity {
  @Field(() => String) readonly password: string;
}

@InputType()
export class InputConfirmSignUpInvitation
  implements GTInputConfirmSignUpInvitation
{
  @Field(() => String) readonly email: string;
  @Field(() => InputConfrimSignUpInvitationSecurity)
  readonly security: GTMemberSecurity;
  @Field(() => InputCreateSignUpInvitationPersonalDetails)
  readonly personalDetails: GTPersonalDetails;
  @Field(() => InputConfirmSignUpInvitationInvitationDetails)
  readonly invitationDetails: ConfirmSignUpInvitationInvitationDetails;
}
