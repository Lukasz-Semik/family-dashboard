import { sdkValidateEmail, sdkValidateRequired } from '@family-dashboard/sdk';

type Arg = string | number | undefined | null;
type ValidatorBase = (value: Arg) => string | undefined;

export function combineValidators(...validators: ValidatorBase[]) {
  return (value: Arg) => {
    return validators.reduce((errorMessage = '', validator = () => '') => {
      return errorMessage || validator(value);
    }, '');
  };
}

export const validateRequired =
  (message: string) => (value: string | number | undefined | null) => {
    if (!sdkValidateRequired(value)) {
      return message;
    }

    return undefined;
  };

export const validateEmail =
  (message: string) => (value: string | number | undefined | null) => {
    if (!sdkValidateEmail(value)) {
      return message;
    }

    return undefined;
  };
