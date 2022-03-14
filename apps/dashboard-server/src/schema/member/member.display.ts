import { Field, ObjectType } from '@nestjs/graphql';

import {
  GTMember,
  GTMemberType,
  GTModulePermissions,
  GTPersonalDetails,
} from '@family-dashboard/global/types';

import { DisplayPersonalDetails } from '../misc/misc.display';

@ObjectType()
export class DisplayMemberModulePermissions implements GTModulePermissions {
  @Field(() => Boolean) readonly hasFamilySettings: boolean;
  @Field(() => Boolean) readonly hasFinanacial: boolean;
}

@ObjectType()
export class DisplayMember implements GTMember {
  @Field(() => String) readonly fullKey: string;
  @Field(() => String) readonly familyId: string;
  @Field(() => String) readonly email: string;
  @Field(() => String) readonly updatedAt: string;
  @Field(() => String) readonly createdAt: string;
  @Field(() => DisplayPersonalDetails)
  readonly personalDetails: GTPersonalDetails;
  @Field(() => GTMemberType) readonly memberType: GTMemberType;
  @Field(() => DisplayMemberModulePermissions)
  readonly modulePermissions: GTModulePermissions;
}
