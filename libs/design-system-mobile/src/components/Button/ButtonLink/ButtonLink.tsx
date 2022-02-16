import React from 'react';
import { Pressable } from 'react-native';

import { ButtonProps } from '../Button.types';
import { StyledText } from './ButtonLink.styled';

interface Props extends Omit<ButtonProps, 'children'> {
  text: string;
}

export function ButtonLink({ isDisabled, text, ...restProps }: Props) {
  return (
    <Pressable disabled={isDisabled} {...restProps}>
      <StyledText>{text}</StyledText>
    </Pressable>
  );
}
