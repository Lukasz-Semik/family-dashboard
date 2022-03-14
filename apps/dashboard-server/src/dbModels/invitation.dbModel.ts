import {
  GTInvitation,
  GTMemberType,
  GTModulePermissions,
} from '@family-dashboard/global/types';

export interface InvitationSecurityDBModel {
  code: string;
}

export interface InvitationDBModel extends GTInvitation {
  security: InvitationSecurityDBModel;
  memberType: GTMemberType;
  modulePermissions: GTModulePermissions;
  createdAt: string;
  updatedAt: string;
}
