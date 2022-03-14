import { GTInvitation } from '@family-dashboard/global/types';

import { InvitationDBModel } from '../dbModels/invitation.dbModel';

export const serializeInvitation = (
  invitationDBModel: InvitationDBModel
): GTInvitation => ({
  familyId: invitationDBModel.familyId,
  fullKey: invitationDBModel.fullKey,
  email: invitationDBModel.email,
  details: {
    familyName: invitationDBModel.details.familyName,
    inviterEmail: invitationDBModel.details.inviterEmail,
    inviterName: invitationDBModel.details.familyName,
  },
  validTo: invitationDBModel.validTo,
  personalDetails: invitationDBModel.personalDetails,
});
