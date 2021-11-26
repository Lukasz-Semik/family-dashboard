import { useCallback, useState } from 'react';

import { SignUpStep, Values } from '../SignUp.types';
import { useVerifyEmail } from './useVerifyEmail';

export function useSignUp() {
  const [currentStep, setCurrentStep] = useState(SignUpStep.Email);

  const { verifyEmail, isLoadingVerifyEmail, verifyEmailResponse } =
    useVerifyEmail({
      goToNextStep: () => setCurrentStep(SignUpStep.PersonalDetails1),
      goToErrorStep: () => setCurrentStep(SignUpStep.EmailVerificationFailed),
    });

  const onSubmit = useCallback(
    (values: Values, { resetForm }) => {
      switch (currentStep) {
        case SignUpStep.Email:
          verifyEmail(values.email);
          return;
        case SignUpStep.PersonalDetails1:
          setCurrentStep(SignUpStep.PersonalDetails2);
          return;
        case SignUpStep.PersonalDetails2:
          setCurrentStep(SignUpStep.FamilyName);
          return;
        case SignUpStep.FamilyName:
          setCurrentStep(SignUpStep.Password);
          return;
        case SignUpStep.Password:
          setCurrentStep(SignUpStep.ConfirmEmail);
          return;
        case SignUpStep.ConfirmEmail:
          return setCurrentStep(SignUpStep.FinalStep);
        case SignUpStep.EmailVerificationFailed:
          setCurrentStep(SignUpStep.Email);
          resetForm();
          return;
        default:
          // TODO: ERROR TOAST
          return;
      }
    },
    [currentStep, verifyEmail]
  );

  return {
    currentStep,
    onSubmit,
    isLoadingVerifyEmail,
    verifyEmailResponse,
  };
}
