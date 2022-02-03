import {
  dsStyles,
  IndicatorProgressCircle,
} from '@family-dashboard/design-system';

import {
  StyledIndicatorProgressWrapper,
  StyledIndicatorStep,
} from './AuthIndicatorProgress.styled';

interface Props {
  progress: number;
  content: React.ReactNode;
}

export function AuthIndicatorProgress({ progress, content }: Props) {
  return (
    <StyledIndicatorProgressWrapper>
      <IndicatorProgressCircle
        strokeWidth={4}
        size={44}
        bgColor={dsStyles.colors.orange1}
        barColor={dsStyles.colors.orange4}
        progress={progress}
      >
        <StyledIndicatorStep>{content}</StyledIndicatorStep>
      </IndicatorProgressCircle>
    </StyledIndicatorProgressWrapper>
  );
}
