import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  dsStyles,
  ElementCloseAnimated,
} from '@family-dashboard/design-system';
import {
  GTVerifyEmailResponse,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

import {
  StyledErrorBox,
  StyledErrorDescription,
  StyledErrorIndicatorWrapper,
} from '../../Auth.styled';

interface Props {
  verifyEmailResponse?: GTVerifyEmailResponse;
}

export function SignUpEmailFailed({ verifyEmailResponse }: Props) {
  const copies = useMemo(() => {
    if (verifyEmailResponse?.status === GTVerifyEmailStatus.AlreadyCreated) {
      return {
        title: (
          <FormattedMessage id="auth.signUp.verifyEmail.alreadyCreated.title" />
        ),
        description: (
          <FormattedMessage id="auth.signUp.verifyEmail.alreadyCreated.description" />
        ),
      };
    }

    if (verifyEmailResponse?.status === GTVerifyEmailStatus.Invited) {
      return {
        title: <FormattedMessage id="auth.signUp.verifyEmail.invited.title" />,
        description: (
          <FormattedMessage
            id="auth.signUp.verifyEmail.invited.description"
            values={{ name: verifyEmailResponse?.inviterName }}
          />
        ),
      };
    }

    if (verifyEmailResponse?.status === GTVerifyEmailStatus.SignUpNotFinished) {
      return {
        title: (
          <FormattedMessage id="auth.signUp.verifyEmail.notFinished.title" />
        ),
        description: (
          <FormattedMessage id="auth.signUp.verifyEmail.notFinished.description" />
        ),
      };
    }

    return {
      title: (
        <FormattedMessage id="auth.signUp.verifyEmail.defaultMessage.title" />
      ),
      description: (
        <FormattedMessage id="auth.signUp.verifyEmail.defaultMessage.description" />
      ),
    };
  }, [verifyEmailResponse]);

  return (
    <div>
      <StyledErrorBox>{copies.title}</StyledErrorBox>
      <StyledErrorDescription>{copies.description}</StyledErrorDescription>

      <StyledErrorIndicatorWrapper>
        <ElementCloseAnimated
          bgColor="transparent"
          barColor={dsStyles.colors.red2}
          size={64}
          strokeWidth={4}
          iconColor={dsStyles.colors.red2}
          iconSize="22px"
        />
      </StyledErrorIndicatorWrapper>
    </div>
  );
}
