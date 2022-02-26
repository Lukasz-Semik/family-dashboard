import {
  CTGender,
  CTInvitationBaseData,
  CTInvitationDisplayData,
  CTInvitationUserPersonalDetailsData,
  GTInvitationDBRecord,
  GTInvitationDisplay,
} from '@family-dashboard/global/types';

import { InvitationEntity } from '../entities/invitation.entity';

export const serializeInvitation = (
  invitation: InvitationEntity
): CTInvitationDisplayData => {
  return {
    email: invitation.email,
    firstName: invitation.firstName,
    validTo: invitation.validTo,
  };
};

export const serilizeUserInvitation = (
  invitation: InvitationEntity
): CTInvitationUserPersonalDetailsData => {
  return {
    email: invitation.email,
    familyName: invitation.familyName,
    inviterName: invitation.inviterName,
    firstName: invitation.firstName,
    middleName: invitation.middleName,
    lastName: invitation.lastName,
    dob: invitation.dob,
    gender: invitation.gender as CTGender,
  };
};

// V2
export const serializeInvitationV2 = (
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
