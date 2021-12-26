import {
  CTGender,
  CTInvitationBaseData,
  CTInvitationDisplayData,
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
