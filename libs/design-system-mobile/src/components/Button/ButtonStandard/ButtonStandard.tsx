import React from 'react';
import { Animated, GestureResponderEvent, Pressable, Text } from 'react-native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import { useAnimatedColor } from '../../../hooks/useAnimatedColor';
import { ButtonProps, ButtonTextProps } from '../Button.types';
import { StyledText, StyledWrapper } from './ButtonStandard.styled';
import { Grid } from 'react-native-animated-spinkit';

export function ButtonStandardText({ text }: ButtonTextProps) {
  return <StyledText>{text}</StyledText>;
}

export function ButtonStandard({
  children,
  onPressIn,
  onPressOut,
  isLoading,
  isDisabled,
}: ButtonProps) {
  const { runColorAnimation, revertColorAnimation, animatedColor } =
    useAnimatedColor({
      startColor: isDisabled
        ? styledConstants.colors.orange2
        : styledConstants.colors.orange3,
      endColor: isDisabled
        ? styledConstants.colors.orange2
        : styledConstants.colors.orange3,
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
    <Pressable
      disabled={isDisabled}
      onPressIn={handleOnPressIn}
      onPressOut={handleOnPressOut}
    >
      <StyledWrapper
        style={{
          backgroundColor: animatedColor,
        }}
      >
        {isLoading ? (
          <Grid size={32} color={styledConstants.colors.violet2} />
        ) : (
          children
        )}
      </StyledWrapper>
    </Pressable>
  );
}
