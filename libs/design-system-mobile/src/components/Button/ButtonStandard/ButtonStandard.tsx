import React from 'react';
import { Animated, GestureResponderEvent, Pressable, Text } from 'react-native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import { useAnimatedColor } from '../../../hooks/useAnimatedColor';
import { ButtonProps, ButtonTextProps } from '../Button.types';
import { StyledText, StyledWrapper } from './ButtonStandard.styled';

export function ButtonStandardText({ text }: ButtonTextProps) {
  return <StyledText>{text}</StyledText>;
}

export function ButtonStandard({
  children,
  onPressIn,
  onPressOut,
  isLoading,
}: ButtonProps) {
  const { runColorAnimation, revertColorAnimation, animatedColor } =
    useAnimatedColor({
      startColor: styledConstants.colors.orange3,
      endColor: styledConstants.colors.orange5,
    });

  const handleOnPressIn = (event: GestureResponderEvent) => {
    runColorAnimation();
    onPressIn?.(event);
  };

  const handleOnPressOut = (event: GestureResponderEvent) => {
    revertColorAnimation();
    onPressOut?.(event);
  };

  return (
    <Pressable onPressIn={handleOnPressIn} onPressOut={handleOnPressOut}>
      <StyledWrapper
        style={{
          backgroundColor: animatedColor,
        }}
      >
        {children}
      </StyledWrapper>
    </Pressable>
  );
}
