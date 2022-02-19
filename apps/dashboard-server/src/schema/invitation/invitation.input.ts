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
  GTInputCreateSignUpInvitation,
  GTInvitationDetails,
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
export class InputPersonalDetailsInvitation
  implements Partial<GTPersonalDetails>
{
  @Field(() => String) readonly password: string;
  @Field(() => String) readonly firstName: string;
  @Field(() => String, { nullable: true }) readonly middleName?: string;
  @Field(() => String) readonly lastName: string;
  @Field(() => Date) readonly dob: Date;
  @Field(() => GTGender) readonly gender: GTGender;
}

@InputType()
export class InputInvitationDetailsInvitation
  implements Omit<GTInvitationDetails, 'code' | 'validTo'>
{
  @Field(() => String) readonly familyName: string;
  @Field(() => String) readonly inviterEmail: string;
  @Field(() => String) inviterName: string;
}

@InputType()
export class InputCreateSignUpInvitation
  implements GTInputCreateSignUpInvitation
{
  @Field(() => String) readonly email: string;
  @Field(() => InputPersonalDetailsInvitation)
  readonly personalDetails: Partial<GTPersonalDetails>;
  @Field(() => InputInvitationDetailsInvitation)
  readonly invitationDetails: Omit<GTInvitationDetails, 'validTo' | 'code'>;
}
