import {
  dsStyles,
  IconCheckmark,
  IconCrossmarkCircle,
} from '@family-dashboard/design-system';

import {
  StyledIconInnerWrapper,
  StyledIconWrapper,
  StyledText,
  StyledTextWrapper,
} from './AuthPassword.styled';

interface Props {
  isValid: boolean;
  children: React.ReactNode;
}

export function AuthPasswordErrorText({ isValid, children }: Props) {
  return (
    <StyledTextWrapper>
      <StyledIconWrapper>
        <StyledIconInnerWrapper isVisible={isValid}>
          <IconCheckmark
            width="1rem"
            height="1rem"
            color={dsStyles.colors.green1}
          />
        </StyledIconInnerWrapper>

        <StyledIconInnerWrapper isVisible={!isValid}>
          <IconCrossmarkCircle
            width="1rem"
            height="1rem"
            color={dsStyles.colors.red2}
          />
        </StyledIconInnerWrapper>
      </StyledIconWrapper>
      <StyledText isValid={isValid}>{children}</StyledText>
    </StyledTextWrapper>
  );
}
