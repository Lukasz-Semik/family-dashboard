import { isEmpty, omit, values } from 'lodash';

import {
  sdkValidateEmail,
  sdkValidateMaxLength,
} from '@family-dashboard/global/sdk';

import { ConfirmInvitationInput, CreateInvitationInput } from '../../../schema';

export const validateCreateInvitationInput = (
  createInvitationInput: CreateInvitationInput
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
    createInvitationInput.familyName,
  ];

  if (fieldsForLength.some((field) => !sdkValidateMaxLength(field, 80))) {
    return false;
  }

  return true;
};

export const validateConfirmInvitationInput = (
  confirmInvitationInput: ConfirmInvitationInput
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
    confirmInvitationInput.familyName,
  ];

  if (fieldsForLength.some((field) => !sdkValidateMaxLength(field, 80))) {
    return false;
  }

  return true;
};
