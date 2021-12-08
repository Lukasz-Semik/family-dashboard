import { useCallback, useState } from 'react';

import { SignUpStep, Values } from '../SignUp.types';
import { useConfirmSignUpInvitation } from './useConfirmSignUpInvitation';
import { useCreateSignUpInvitation } from './useCreateSignUpInvitation';
import { useVerifyEmail } from './useVerifyEmail';

export function useSignUp() {
  const [currentStep, setCurrentStep] = useState(SignUpStep.Email);

  const { verifyEmail, isLoadingVerifyEmail, verifyEmailResponse } =
    useVerifyEmail({
      goToNextStep: () => setCurrentStep(SignUpStep.FamilyName),
      goToErrorStep: () => setCurrentStep(SignUpStep.EmailVerificationFailed),
    });

  const { createSignUpInvitation } = useCreateSignUpInvitation();
  const { confirmSignUpInvitation } = useConfirmSignUpInvitation();

  const onSubmit = useCallback(
    (values: Values, { resetForm }) => {
      switch (currentStep) {
        case SignUpStep.Email:
          verifyEmail(values.email);
          resetForm({ values });
          return;
        case SignUpStep.FamilyName:
          setCurrentStep(SignUpStep.PersonalDetails1);
          resetForm({ values });
          return;
        case SignUpStep.PersonalDetails1:
          setCurrentStep(SignUpStep.PersonalDetails2);
          resetForm({ values });
          return;
        case SignUpStep.PersonalDetails2:
          setCurrentStep(SignUpStep.Password);
          resetForm({ values });
          return;
        case SignUpStep.Password:
          createSignUpInvitation(values);
          setCurrentStep(SignUpStep.ConfirmEmail);
          resetForm({ values });
          return;
        case SignUpStep.ConfirmEmail:
          confirmSignUpInvitation(values);
          setCurrentStep(SignUpStep.FinalStep);
          return;
        case SignUpStep.EmailVerificationFailed:
          setCurrentStep(SignUpStep.Email);
          resetForm({
            values: {
              email: '',
              firstName: '',
              middleName: '',
              lastName: '',
              familyName: '',
              isConsentGiven: false,
              isLastNameDifferent: false,
              gender: undefined,
              dob: '',
              password: '',
            },
          });
          return;
        default:
          // TODO: ERROR TOAST
          return;
      }
    },
    [currentStep, verifyEmail, createSignUpInvitation, confirmSignUpInvitation]
  );

  return {
    currentStep,
    onSubmit,
    isLoadingVerifyEmail,
    verifyEmailResponse,
  };
}
