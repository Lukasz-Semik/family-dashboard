export interface ControlsRenderProps {
  isHovered: boolean;
  isFocused: boolean;
  isDisabled?: boolean;
  hasError?: boolean;
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  label: React.ReactNode;
  labelBgColor?: string;
  renderRightControls?: (renderProps: ControlsRenderProps) => React.ReactNode;
  renderLeftControls?: (renderProps: ControlsRenderProps) => React.ReactNode;
  renderError?: (renderProps: ControlsRenderProps) => React.ReactNode;
}

export interface InputSecurityProps extends InputProps {
  showText: React.ReactNode;
  hideText: React.ReactNode;
}

export interface InputMaskedProps extends InputProps {
  mask?: string;
}

export type InputPureProps = Omit<
  InputProps,
  'renderRightControls' | 'renderLeftControls' | 'renderError'
>;
