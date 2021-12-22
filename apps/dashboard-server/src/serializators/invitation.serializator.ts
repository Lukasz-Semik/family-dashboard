import {
  CTGender,
  CTInvitationBaseData,
} from '@family-dashboard/global/types';

import { InvitationEntity } from '../entities/invitation.entity';


export const serializeInvitation = (
  invitation: InvitationEntity
): CTInvitationBaseData => {
  return {
    email: invitation.email,
    firstName: invitation.firstName,
    middleName: invitation.middleName,
    lastName: invitation.lastName,
    gender: invitation.gender as CTGender,
    dob: invitation.dob,
    validTo: invitation.validTo,
  };
};
