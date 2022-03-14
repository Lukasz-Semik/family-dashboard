import { GTMember } from '@family-dashboard/global/types';

export interface MemberSecurityDBModel {
  password: string;
}

export interface MemberDBModel extends GTMember {
  security: MemberSecurityDBModel;
}
