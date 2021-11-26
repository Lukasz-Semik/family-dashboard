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

  const copies = useMemo(() => {
    if (
      verifyEmailResponse?.status === CTVerifyEmailResponseStatus.AlreadyCreated
    ) {
      return {
        title: (
          <FormattedMessage id="auth.signUp.verifyEmail.alreadyCreated.title" />
        ),
        description: (
          <FormattedMessage id="auth.signUp.verifyEmail.alreadyCreated.description" />
        ),
      };
    }

    if (verifyEmailResponse?.status === CTVerifyEmailResponseStatus.Invited) {
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

    if (
      verifyEmailResponse?.status ===
      CTVerifyEmailResponseStatus.SignUpNotFinished
    ) {
      return {
        title: (
          <FormattedMessage id="auth.signUp.verifyEmail.notFinished.title" />
        ),
      };
    }

    return {};
  }, [verifyEmailResponse]);

  return (
    <div>
      <StyledErrorBox>{copies.title}</StyledErrorBox>
      <StyledDescription>{copies.description}</StyledDescription>

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
