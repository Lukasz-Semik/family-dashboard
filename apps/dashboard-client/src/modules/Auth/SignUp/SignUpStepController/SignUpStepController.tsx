import { FormattedMessage } from 'react-intl';
import { useFormikContext } from 'formik';

import { CTVerifyEmailResponse } from '@family-dashboard/global/types';

import { AuthPassword } from '../../AuthPassword/AuthPassword';
import { AuthPersonalDetails1 } from '../../AuthPersonalDetails/AuthPersonalDetails1';
import { AuthPersonalDetails2 } from '../../AuthPersonalDetails/AuthPersonalDetails2';
import { SignUpStep, Values } from '../SignUp.types';
import { SignUpConfirmEmail } from '../SignUpConfirmEmail/SignUpConfirmEmail';
import { SignUpEmailFailed } from '../SignUpEmailFailed/SignUpEmailFailed';
import { SignUpEmailFields } from '../SignUpEmailFields/SignUpEmailFields';
import { SignUpFamilyName } from '../SignUpFamilyName/SignUpFamilyName';
import { SignUpFinalStep } from '../SignUpFinalStep/SignUpFinalStep';

interface Props {
  currentStep: SignUpStep;
  verifyEmailResponse?: CTVerifyEmailResponse;
  hasFailedPin: boolean;
  resetHasFailedPin: () => void;
}

export function SignUpStepController({
  currentStep,
  verifyEmailResponse,
  hasFailedPin,
  resetHasFailedPin,
}: Props) {
  const { values } = useFormikContext<Values>();

  switch (currentStep) {
    case SignUpStep.Email:
      return <SignUpEmailFields />;
    case SignUpStep.FamilyName:
      return <SignUpFamilyName />;
    case SignUpStep.PersonalDetails1:
      return (
        <AuthPersonalDetails1
          description={<FormattedMessage id="auth.signUp.personalDetails" />}
        />
      );
    case SignUpStep.PersonalDetails2:
      return (
        <AuthPersonalDetails2
          description={<FormattedMessage id="auth.signUp.personalDetails" />}
        />
      );
    case SignUpStep.Password:
      return <AuthPassword password={values.password} />;
    case SignUpStep.ConfirmEmail:
      return (
        <SignUpConfirmEmail
          hasFailedPin={hasFailedPin}
          resetHasFailedPin={resetHasFailedPin}
        />
      );
    case SignUpStep.FinalStep:
      return <SignUpFinalStep />;
    case SignUpStep.EmailVerificationFailed:
      return <SignUpEmailFailed verifyEmailResponse={verifyEmailResponse} />;
    default:
      return null;
  }
}
