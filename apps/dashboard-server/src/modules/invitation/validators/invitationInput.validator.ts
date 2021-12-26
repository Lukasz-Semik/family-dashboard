import { isEmpty, omit, values } from 'lodash';

import {
  sdkValidateEmail,
  sdkValidateMaxLength,
} from '@family-dashboard/global/sdk';

import { InvitationConfirmInput, InvitationCreateInput } from '../../../schema';

export const validateCreateInvitationInput = (
  createInvitationInput: InvitationCreateInput
) => {
  if (isEmpty(createInvitationInput)) {
    return false;
  }

  if (!sdkValidateEmail(createInvitationInput.email)) {
    return false;
  }

  const fieldsForLength = [
    createInvitationInput.inviterName,
    createInvitationInput.firstName,
    createInvitationInput.middleName,
    createInvitationInput.lastName,
  ];

  if (fieldsForLength.some((field) => !sdkValidateMaxLength(field, 80))) {
    return false;
  }

  return true;
};

export const validateConfirmInvitationInput = (
  confirmInvitationInput: InvitationConfirmInput
) => {
  if (isEmpty(confirmInvitationInput)) {
    return false;
  }

  if (!sdkValidateEmail(confirmInvitationInput.email)) {
    return false;
  }

  if (
    values(omit(confirmInvitationInput, ['middleName'])).some((field) => !field)
  ) {
    return false;
  }

  const fieldsForLength = [
    confirmInvitationInput.firstName,
    confirmInvitationInput.middleName,
    confirmInvitationInput.lastName,
  ];

  if (fieldsForLength.some((field) => !sdkValidateMaxLength(field, 80))) {
    return false;
  }

  return true;
};
