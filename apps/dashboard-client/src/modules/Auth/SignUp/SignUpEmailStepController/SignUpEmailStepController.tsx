import { CTVerifyEmailResponse } from '@family-dashboard/common-types';

import { SignUpStep } from '../SignUp.types';
import { SignUpEmailFailed } from '../SignUpEmailFailed/SignUpEmailFailed';
import { SignUpEmailFields } from '../SignUpEmailFields/SignUpEmailFields';
import { SignUpFamilyName } from '../SignUpFamilyName/SignUpFamilyName';
import { SignUpPersonalDetails1 } from '../SignUpPersonalDetails/SignUpPersonalDetails1';
import { SignUpPersonalDetails2 } from '../SignUpPersonalDetails/SignUpPersonalDetails2';

interface Props {
  currentStep: SignUpStep;
  verifyEmailResponse?: CTVerifyEmailResponse;
}

export function SignUpEmailStepController({
  currentStep,
  verifyEmailResponse,
}: Props) {
  switch (currentStep) {
    case SignUpStep.Email:
      return <SignUpEmailFields />;
    case SignUpStep.FamilyName:
      return <SignUpFamilyName />;
    case SignUpStep.PersonalDetails1:
      return <SignUpPersonalDetails1 />;
    case SignUpStep.PersonalDetails2:
      return <SignUpPersonalDetails2 />;
    case SignUpStep.EmailVerificationFailed:
      return <SignUpEmailFailed verifyEmailResponse={verifyEmailResponse} />;
    default:
      return null;
  }
}
