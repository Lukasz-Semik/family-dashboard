import validator from 'validator';

type Value = string | number | undefined | null;

export const sdkValidateRequired = (value?: Value) => {
  if (!value) {
    return false;
  }

  if (!String(value).trim()) {
    return false;
  }

  return true;
};

export const sdkValidateEmail = (value: Value) => {
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

export const sdkValidateMaxLength = (value: Value, maxLength: number) => {
  if (!value) {
    return true;
  }

  if (String(value).length > maxLength) {
    return false;
  }

  return true;
};
