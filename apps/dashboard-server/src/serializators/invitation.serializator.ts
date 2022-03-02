import {
  GTInvitationDBRecord,
  GTInvitationDisplay,
} from '@family-dashboard/global/types';

export const serializeInvitation = (
  invitationDBRecord: GTInvitationDBRecord
): GTInvitationDisplay => ({
  familyId: invitationDBRecord.familyId,
  fullKey: invitationDBRecord.fullKey,
  email: invitationDBRecord.email,
  invitationDetails: {
    familyName: invitationDBRecord.invitationDetails.familyName,
    inviterEmail: invitationDBRecord.invitationDetails.inviterEmail,
    inviterName: invitationDBRecord.invitationDetails.familyName,
    validTo: invitationDBRecord.invitationDetails.validTo,
  },
  personalDetails: invitationDBRecord.personalDetails,
});
