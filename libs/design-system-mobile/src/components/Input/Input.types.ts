import React from 'react';
import { TextInputProps } from 'react-native';

export interface ControlsRenderProps {
  isFocused?: boolean;
  hasError?: boolean;
}

export interface InputProps extends TextInputProps {
  labelBgColor?: string;
  label: React.ReactNode;
  renderRightControls?: (renderProps: ControlsRenderProps) => React.ReactNode;
  renderLeftControls?: (renderProps: ControlsRenderProps) => React.ReactNode;
  renderError?: (renderProps: ControlsRenderProps) => React.ReactNode;
  hasError?: boolean;
}
