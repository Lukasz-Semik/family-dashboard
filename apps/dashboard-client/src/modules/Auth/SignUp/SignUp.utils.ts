import { SignUpStep } from './SignUp.types';

export const progressMap = {
  [SignUpStep.Email]: {
    step: 1,
    progress: Math.round((1 / 7) * 100),
  },
  [SignUpStep.PersonalDetails1]: {
    step: 2,
    progress: Math.round((2 / 7) * 100),
  },
  [SignUpStep.PersonalDetails2]: {
    step: 3,
    progress: Math.round((3 / 7) * 100),
  },
  [SignUpStep.FamilyName]: {
    step: 4,
    progress: Math.round((4 / 7) * 100),
  },
  [SignUpStep.Password]: {
    step: 5,
    progress: Math.round((5 / 7) * 100),
  },
  [SignUpStep.ConfirmEmail]: {
    step: 6,
    progress: Math.round((6 / 7) * 100),
  },
  [SignUpStep.FinalStep]: {
    step: 7,
    progress: 100,
  },
  [SignUpStep.EmailVerificationFailed]: {
    step: 1,
    progress: Math.round((1 / 7) * 100),
  },
};
