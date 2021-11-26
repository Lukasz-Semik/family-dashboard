import { useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  CTVerifyEmailResponse,
  CTVerifyEmailResponseStatus,
} from '@family-dashboard/common-types';
import {
  dsStyles,
  IconCrossmark,
  IndicatorProgressCircle,
} from '@family-dashboard/design-system';

import {
  StyledCrossmarkWrapper,
  StyledDescription,
  StyledErrorBox,
  StyledIndicatorWrapper,
} from './SignUpEmailFailed.styled';

interface Props {
  verifyEmailResponse?: CTVerifyEmailResponse;
}

export function SignUpEmailFailed({ verifyEmailResponse }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setProgress(100));
  }, []);

  const title = useMemo(() => {
    if (
      verifyEmailResponse?.status === CTVerifyEmailResponseStatus.AlreadyCreated
    ) {
      return (
        <FormattedMessage id="auth.signUp.verifyEmail.alreadyCreated.title" />
      );
    }

    if (verifyEmailResponse?.status === CTVerifyEmailResponseStatus.Invited) {
      return <FormattedMessage id="auth.signUp.verifyEmail.invited.title" />;
    }

    if (
      verifyEmailResponse?.status ===
      CTVerifyEmailResponseStatus.SignUpNotFinished
    ) {
      return (
        <FormattedMessage id="auth.signUp.verifyEmail.notFinished.title" />
      );
    }

    return '';
  }, [verifyEmailResponse?.status]);

  const description = useMemo(() => {
    if (
      verifyEmailResponse?.status === CTVerifyEmailResponseStatus.AlreadyCreated
    ) {
      return (
        <FormattedMessage id="auth.signUp.verifyEmail.alreadyCreated.description" />
      );
    }

    if (verifyEmailResponse?.status === CTVerifyEmailResponseStatus.Invited) {
      return (
        <FormattedMessage
          id="auth.signUp.verifyEmail.invited.description"
          values={{ name: verifyEmailResponse?.inviterName }}
        />
      );
    }

    if (
      verifyEmailResponse?.status ===
      CTVerifyEmailResponseStatus.SignUpNotFinished
    ) {
      return (
        <FormattedMessage id="auth.signUp.verifyEmail.notFinished.description" />
      );
    }

    return '';
  }, [verifyEmailResponse]);

  return (
    <div>
      <StyledErrorBox>{title}</StyledErrorBox>
      <StyledDescription>{description}</StyledDescription>

      <StyledIndicatorWrapper>
        <IndicatorProgressCircle
          bgColor="transparent"
          barColor={dsStyles.colors.red2}
          size={64}
          strokeWidth={4}
          progress={progress}
        >
          <StyledCrossmarkWrapper isVisible={Boolean(progress)}>
            <IconCrossmark
              color={dsStyles.colors.red2}
              width="22px"
              height="22px"
            />
          </StyledCrossmarkWrapper>
        </IndicatorProgressCircle>
      </StyledIndicatorWrapper>
    </div>
  );
}
