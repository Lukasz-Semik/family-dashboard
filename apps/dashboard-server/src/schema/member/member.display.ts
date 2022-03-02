import { Field, ObjectType } from '@nestjs/graphql';

import {
  GTMemberDisplay,
  GTMemberType,
  GTModulePermissionsDisplay,
  GTPersonalDetailsDisplay,
} from '@family-dashboard/global/types';

import { DisplayPersonalDetails } from '../misc/misc.display';

@ObjectType()
export class DisplayMemberModulePermissions
  implements GTModulePermissionsDisplay
{
  @Field(() => Boolean) readonly hasFamilySettings: boolean;
  @Field(() => Boolean) readonly hasFinanacial: boolean;
}

@ObjectType()
export class DisplayMember implements GTMemberDisplay {
  @Field(() => String) readonly fullKey: string;
  @Field(() => String) readonly familyId: string;
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly updatedAt: string;
  @Field(() => String) readonly createdAt: string;
  @Field(() => DisplayPersonalDetails)
  readonly personalDetails: GTPersonalDetailsDisplay;
  @Field(() => GTMemberType) readonly memberType: GTMemberType;
  @Field(() => DisplayMemberModulePermissions)
  readonly modulePermissions: GTModulePermissionsDisplay;
}
