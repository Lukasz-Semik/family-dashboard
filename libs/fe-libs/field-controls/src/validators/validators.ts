import dayjs from 'dayjs';

import {
  sdkValidateDateValid,
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
    console.log(sdkValidateDateValid(String(value)));
    if (dayjs(value, 'DD-MM-YYYY').format('DD-MM-YYYY') !== value) {
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
