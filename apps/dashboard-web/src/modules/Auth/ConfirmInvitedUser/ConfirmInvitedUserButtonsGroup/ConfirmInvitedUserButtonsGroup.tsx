import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import { ButtonStandard } from '@family-dashboard/design-system';
import { webRoutes } from '@family-dashboard/global/const';

import { StyledLink } from '../../Auth.styled';
import { ConfirmInvitedUserStep } from '../ConfirmInvitedUser.types';
import { StyledWrapper } from './ConfirmInvitedUserButtonsGroup.styled';

interface Props {
  isFailed: boolean;
  currentStep: ConfirmInvitedUserStep;
}

export function ConfirmInvitedUserButtonsGroup({
  isFailed,
  currentStep,
}: Props) {
  const message = useMemo(() => {
    switch (currentStep) {
      case ConfirmInvitedUserStep.InitialStep:
        return <FormattedMessage id="shared.start" />;
      case ConfirmInvitedUserStep.Password:
        return <FormattedMessage id="shared.confirm" />;
      case ConfirmInvitedUserStep.FinalStep:
        return <FormattedMessage id="controls.goToDashboard" />;
      default:
        return <FormattedMessage id="shared.next" />;
    }
  }, [currentStep]);

  if (isFailed) {
    return (
      <StyledWrapper>
        <StyledLink to={webRoutes.auth.signInRoute.path}>
          <FormattedMessage id="auth.signUp.backToSignIn" />
        </StyledLink>
      </StyledWrapper>
    );
  }
  return (
    <StyledWrapper>
      <ButtonStandard>{message}</ButtonStandard>
    </StyledWrapper>
  );
}
