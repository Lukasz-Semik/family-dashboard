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
      differentLastName: 'My last name is different',
      description:
        'You can start your sign up process and create family, however - if you want to join existing one, ask family head for invitation.',
      backToSignIn: 'Back to Sign In',
      consent: 'I agree to the terms and conditions',
      verifyEmail: {
        alreadyCreated: {
          title: 'This email is already in use',
          description: 'Just sign in to the app.',
        },
        invited: {
          title: 'This email is already invited',
          description:
            'This email was invited by {name}. Please check your email box and accept invitation.',
        },
        notFinished: {
          title: 'This email is not confirmed yet',
          description:
            'This email was used for signing up, however is not confirmed. Please, check your email box and finalize onboarding.',
        },
      },
      familyNameDescription:
        'Provide name of your family and confirm your last name.',
      personalDetails: 'Provide your personal details.',
      passwordErrors: {
        specialCharacter: 'At least one special character',
        minCharacters: 'Minimum 8 characters',
        numericCharacter: 'At least one numeric character',
        upperAndLowerCharacter: 'One uppercase and lowercase letter',
      },
      confirmEmail: {
        description:
          'We have sent you an confirmation e-mail to {email} with validation code. Please enter it.',
        codeDescription:
          'You don’t receive an e-mail? Please, check spam folder. ',
        sendNewCode: 'Send new code',
      },
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
    confirmPassword: {
      label: 'Confirm password',
    },
    familyName: {
      label: 'Family name',
      placeholder: 'Name of your family',
    },
    lastName: {
      label: 'Last name',
      placeholder: 'Your last name',
    },
    firstName: {
      label: 'First name',
      placeholder: 'Your first name',
    },
    middleName: {
      label: 'Middle name (optional)',
      placeholder: 'Your middle name',
    },
    dateOfBirth: {
      label: 'Date of birth',
    },
    gender: {
      label: 'Gender',
      items: {
        male: 'Male',
        female: 'Female',
        other: 'Other',
      },
    },
  },
  shared: {
    show: 'Show',
    hide: 'Hide',
    next: 'Next',
    start: 'Start',
    restart: 'Restart',
    select: 'Select...',
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
