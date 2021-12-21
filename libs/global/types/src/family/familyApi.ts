import { CTInvitationBaseData,CTUserBaseData } from '../user/user';

export interface CTFamilyAllMembersResponse {
  users: CTUserBaseData[];
  invitations: CTInvitationBaseData[];
}
