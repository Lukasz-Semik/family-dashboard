import {
  dsStyles,
  IndicatorProgressCircle,
} from '@family-dashboard/design-system';

import { SignUpStep } from '../SignUp.types';
import { progressMap } from '../SignUp.utils';
import {
  StyledIndicatorProgressWrapper,
  StyledIndicatorStep,
} from './SignUpIndicatorProgress.styled';

interface Props {
  currentStep: SignUpStep;
}

export function SignUpIndicatorProgress({ currentStep }: Props) {
  return (
    <StyledIndicatorProgressWrapper>
      <IndicatorProgressCircle
        strokeWidth={4}
        size={44}
        bgColor={dsStyles.colors.orange1}
        barColor={dsStyles.colors.orange4}
        progress={progressMap[currentStep].progress}
      >
        <StyledIndicatorStep>
          {progressMap[currentStep].step}/7
        </StyledIndicatorStep>
      </IndicatorProgressCircle>
    </StyledIndicatorProgressWrapper>
  );
}
