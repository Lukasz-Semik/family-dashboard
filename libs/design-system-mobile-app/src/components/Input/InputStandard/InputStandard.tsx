import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';

import { styledConstants } from '@family-dashboard/global/styled-constants';

import { useAnimatedColor } from '../../../hooks/useAnimatedColor';
import {
  StyledErrorWrapper,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledWrapper,
} from '../Input.styled';
import { InputProps } from '../Input.types';

export function InputStandard({
  labelBgColor = styledConstants.colors.orange1,
  label,
  placeholder,
  renderLeftControls,
  renderRightControls,
  renderError,
  hasError,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const { runColorAnimation, revertColorAnimation, animatedColor } =
    useAnimatedColor({
      startColor: hasError
        ? styledConstants.colors.red1
        : styledConstants.colors.violet4,
      endColor: styledConstants.colors.orange4,
    });

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    runColorAnimation();
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    revertColorAnimation();
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <StyledWrapper>
      <StyledInputWrapper style={{ borderColor: animatedColor }}>
        <StyledLabel bgColor={labelBgColor} style={{ color: animatedColor }}>
          {label}
        </StyledLabel>
        {renderLeftControls?.({ isFocused, hasError })}
        <StyledInput
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          {...props}
        />
        {renderRightControls?.({ isFocused, hasError })}
      </StyledInputWrapper>
      <StyledErrorWrapper>
        {renderError?.({ isFocused, hasError })}
      </StyledErrorWrapper>
    </StyledWrapper>
  );
}
