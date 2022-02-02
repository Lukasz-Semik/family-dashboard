import React from 'react';
import { useEffect } from 'react';
import { Animated } from 'react-native';

import { styledConstants } from '@family-dashboard/global/styled-constants';

import { useAnimatedColor } from '../../hooks/useAnimatedColor';
import { StyledIconFormControlWrapper } from './Wrappers.styled';

interface RenderProps {
  color: Animated.AnimatedInterpolation;
}

export interface Props {
  renderIcon: (renderProps: RenderProps) => React.ReactNode;
  shouldRunAnimation: boolean;
  startColor?: string;
  endColor?: string;
}

export function WrapperIconFormControl({
  renderIcon,
  shouldRunAnimation,
  startColor = styledConstants.colors.violet4,
  endColor = styledConstants.colors.orange4,
}: Props) {
  const { runColorAnimation, revertColorAnimation, animatedColor } =
    useAnimatedColor({
      startColor,
      endColor,
    });

  useEffect(() => {
    if (shouldRunAnimation) {
      runColorAnimation();
    } else {
      revertColorAnimation();
    }
  }, [shouldRunAnimation, runColorAnimation, revertColorAnimation]);

  return (
    <StyledIconFormControlWrapper>
      {renderIcon({ color: animatedColor })}
    </StyledIconFormControlWrapper>
  );
}
