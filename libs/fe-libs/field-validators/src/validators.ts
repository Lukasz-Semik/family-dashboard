import dayjs from 'dayjs';

import {
  FULL_DATE_FORMAT,
  FULL_TIME_FORMAT,
} from '@family-dashboard/global/const';
import {
  sdkValidateEmail,
  sdkValidateRequired,
} from '@family-dashboard/global/sdk';

type Arg = string | number | undefined | null;
type ValidatorBase = (value: Arg) => string | undefined;

export function combineFieldValidators(...validators: ValidatorBase[]) {
  return (value: Arg) => {
    return validators.reduce((errorMessage = '', validator = () => '') => {
      return errorMessage || validator(value);
    }, '');
  };
}

export const validateFieldDateValid =
  (message: React.ReactNode) => (value: string | number | undefined | null) => {
    if (!value) {
      return undefined;
    }

    if (dayjs(value, FULL_DATE_FORMAT).format(FULL_DATE_FORMAT) !== value) {
      return message as string;
    }

    return undefined;
  };

export const validateFieldTimeValid =
  (message: React.ReactNode) => (value: string | number | undefined | null) => {
    if (!value) {
      return undefined;
    }

    if (dayjs(value, FULL_TIME_FORMAT).format(FULL_TIME_FORMAT) !== value) {
      return message as string;
    }

    return undefined;
  };

export const validateFieldDateIsNotPast =
  (message: React.ReactNode) => (value: string | number | undefined | null) => {
    if (dayjs(value).isBefore(dayjs())) {
      return message as string;
    }

    return undefined;
  };

export const validateFieldRequired =
  (message: React.ReactNode) => (value: string | number | undefined | null) => {
    if (!sdkValidateRequired(value)) {
      return message as string;
    }

    return undefined;
  };

export const validateFieldEmail =
  (message: React.ReactNode) => (value: string | number | undefined | null) => {
    if (!sdkValidateEmail(value)) {
      return message as string;
    }

    return undefined;
  };
