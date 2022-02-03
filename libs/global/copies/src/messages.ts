export const copies = {
  auth: {
    signIn: {
      title: 'Sign In',
      description:
        'Family dashboard app - the best way to organize your family stuff, save time and spent it on whatever you want to.',
      forgotPassword: 'Forgot your password?',
    },
    confirmInvitedUser: {
      description:
        'You have been invited to Family Dashboard App. {inviterName} wants you to join {familyName} family. Please, verify your personal details and sign up :) ',
      personalDetails: 'Confirm or update your personal details.',
      finalStepDescription:
        'Thank you for signing up. Your account is ready to use!',
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
        defaultMessage: {
          title: 'Something went wrong',
          description:
            'It is possible that your invitation is deprecated. You can contact our support via: 666-666-666',
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
        sendNewCodeDescription:
          'Are you sure, you need to receive a new verification code? Please, check you spam before confirmation.',
        resendSuccess: 'Invitation has been resent',
        invalidCode: 'This code is invalid',
        successDescription:
          'Your account is set. Would you like to add your family members? ',
        doItLater: 'You can do it later :)',
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
  organization: {
    title: 'Organization',
  },
  finance: {
    title: 'Finance',
  },
  family: {
    title: 'Family',
  },
  familySettings: {
    title: 'Family Settings',
    addMember: 'Add member',
    pendingInvitations: 'Pending invitations',
    familyMembers: 'Family members',
    createMember: {
      chooseMemberType: 'Choose a member type',
      learnMore: 'Learn more about members type',
      giveFinancialModule: 'Give access to financial module',
      giveFamilySettingsModule: 'Give family head permissions',
      adultUser: {
        adding: 'Adding adult user',
        label: 'Adult user - with account',
        description:
          'Adult users will have normal access to the app, will be able to add/edit/remove items',
      },
      childUser: {
        label: 'Child user - with account',
        description:
          'Adult users will have normal access to the app, will be able to add/edit/remove items',
      },
    },
  },
  account: {
    title: 'Account',
  },
  dashboard: {
    title: 'Dashboard',
  },
  notifications: {
    title: 'Notifications',
  },
  controls: {
    goToDashboard: 'Go to dashboard',
    addFamilyMembers: 'Add family members',
  },
  shared: {
    show: 'Show',
    hide: 'Hide',
    next: 'Next',
    start: 'Start',
    restart: 'Restart',
    select: 'Select...',
    cancel: 'Cancel',
    confirm: 'Confirm',
    loadingApp: 'Loading your dashboard...',
    name: 'Name',
    validTo: 'Valid to',
    emptyList: 'This list is empty',
    type: 'Type',
    birthday: 'Birthday',
    backToLists: 'Back to lists',
  },
  errors: {
    somethingWentWrong: 'Something went wrong',
    required: 'This field is required',
    email: 'Provide valid e-mail address',
    invalidDate: 'Invalid date',
    wrongSignIn: 'Email or password is invalid',
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const flattenMessages = (nestedMessages: any, prefix = '') => {
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

export const messages = flattenMessages(copies);
