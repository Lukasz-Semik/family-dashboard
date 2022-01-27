import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { ButtonStandard } from '@family-dashboard/design-system';
import { fdRoutes } from '@family-dashboard/global/const';

import {
  StyledButtonWrapper,
  StyledLink,
  StyledLinkWrapper,
} from '../../Auth.styled';
import { SignUpStep } from '../SignUp.types';

interface Props {
  currentStep: SignUpStep;
}

export function SignUpButtonsGroup({ currentStep }: Props) {
  const isEmailStep = currentStep === SignUpStep.Email;
  const isFinalStep = currentStep === SignUpStep.FinalStep;

  const buttonTranslationPath = useMemo(() => {
    switch (currentStep) {
      case SignUpStep.Email:
        return 'shared.start';
      case SignUpStep.EmailVerificationFailed:
        return 'shared.restart';
      default:
        return 'shared.next';
    }
  }, [currentStep]);

  if (isFinalStep) {
    return null;
  }

  return (
    <>
      <StyledButtonWrapper>
        <ButtonStandard type="submit">
          <FormattedMessage id={buttonTranslationPath} />
        </ButtonStandard>
      </StyledButtonWrapper>

      {isEmailStep && (
        <StyledLinkWrapper>
          <StyledLink to={fdRoutes.auth.signInRoute.path}>
            <FormattedMessage id="auth.signUp.backToSignIn" />
          </StyledLink>
        </StyledLinkWrapper>
      )}
    </>
  );
}
