import { CTInvitationBaseData, CTUserBaseData } from '../user/user';

export type CTInvitationDisplayData = Pick<
  CTInvitationBaseData,
  'firstName' | 'email' | 'validTo'
>;
export interface CTFamilyAllMembersResponse {
  users: CTUserBaseData[];
  invitations: CTInvitationDisplayData[];
}
