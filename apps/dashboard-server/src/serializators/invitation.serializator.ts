import {
  CTGender,
  CTInvitationBaseData,
  CTInvitationDisplayData,
  CTInvitationUserPersonalDetailsData,
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
