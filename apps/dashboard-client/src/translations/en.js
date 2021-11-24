export const m = {
  auth: {
    signIn: {
      title: 'Sign In',
      description:
        'Family dashboard app - the best way to organize your family stuff, save time and spent it on whatever you want to.',
      forgotPassword: 'Forgot your password?',
    },
    signUp: {
      title: 'Sign Up',
    },
  },
  fields: {
    email: {
      label: 'Email',
      placeholder: 'Your eamil address',
    },
    password: {
      label: 'Password',
      placeholder: 'Your secret password',
    },
  },
  shared: {
    show: 'Show',
    hide: 'Hide',
  },
  errors: {
    required: 'This field is required',
    email: 'Provide valid e-mail address',
  },
};

export const flattenMessages = (nestedMessages, prefix = '') => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

export const messages = flattenMessages(m);
