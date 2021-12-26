import { CTInvitationDisplayData } from '../invitation/invitation';
import { CTUserBaseData } from '../user/user';

export interface CTFamilyAllMembersResponse {
  users: CTUserBaseData[];
  invitations: CTInvitationDisplayData[];
}
