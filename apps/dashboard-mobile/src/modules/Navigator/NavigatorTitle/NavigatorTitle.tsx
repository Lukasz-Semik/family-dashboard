import React from 'react';
import { Text } from 'react-native';
import { StyledTitle } from './NavigationTitle.styled';

export function NavigatorTitle({ children }) {
  return <StyledTitle>{children}</StyledTitle>;
}
