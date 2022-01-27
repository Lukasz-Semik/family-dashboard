import {
  dsStyles,
  ElementCloseAnimated,
} from '@family-dashboard/design-system';

import {
  StyledErrorBox,
  StyledErrorDescription,
  StyledErrorIndicatorWrapper,
} from '../../Auth.styled';

export function ConfirmInvitedUserError() {
  return (
    <div>
      <StyledErrorBox>Something went wrong</StyledErrorBox>
      <StyledErrorDescription>
        There is something wrong with this invitation. Maybe it is depreacted?
        Contact support: 666 666 666
      </StyledErrorDescription>

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
