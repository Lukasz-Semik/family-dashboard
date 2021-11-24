import validator from 'validator';

export const sdkValidateRequired = (value?: string | number | null) => {
  if (!value) {
    return false;
  }

  if (!String(value).trim()) {
    return false;
  }

  return true;
};

export const sdkValidateEmail = (value: string | number | undefined | null) => {
  if (!value) {
    return false;
  }

  if (!sdkValidateRequired(value)) {
    return false;
  }

  if (!validator.isEmail(String(value))) {
    return false;
  }

  return true;
};
