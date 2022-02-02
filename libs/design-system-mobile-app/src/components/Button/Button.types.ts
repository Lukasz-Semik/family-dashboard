import React from 'react';
import { PressableProps } from 'react-native';

export interface ButtonTextProps {
  children: React.ReactNode;
}

export interface ButtonProps extends PressableProps {
  isLoading?: boolean;
}
