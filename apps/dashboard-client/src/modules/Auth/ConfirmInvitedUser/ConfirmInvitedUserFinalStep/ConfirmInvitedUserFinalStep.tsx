import { FormattedMessage } from 'react-intl';

import {
  dsStyles,
  ElementCircleAnimatedBase,
  IconCheckmarkPure,
} from '@family-dashboard/design-system';

import { StyledCommonDescription } from '../../Auth.styled';
import { StyledWrapper } from './ConfirmInvitedUserFinalStep.styled';

export function ConfirmInvitedUserFinalStep() {
  return (
    <>
      <StyledCommonDescription>
        <FormattedMessage id="auth.confirmInvitedUser.finalStepDescription" />
      </StyledCommonDescription>

      <StyledWrapper>
        <ElementCircleAnimatedBase
          bgColor="transparent"
          barColor={dsStyles.colors.green1}
          size={64}
          strokeWidth={4}
        >
          <IconCheckmarkPure
            width="22px"
            height="22px"
            color={dsStyles.colors.green1}
          />
        </ElementCircleAnimatedBase>
      </StyledWrapper>
    </>
  );
}
