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
  renderRightControls?: (
    renderProps: ControlsRenderProps
  ) => React.ReactElement;
  renderLeftControls?: (renderProps: ControlsRenderProps) => React.ReactElement;
  renderError?: (renderProps: ControlsRenderProps) => React.ReactElement;
}

export interface InputSecurityProps extends InputProps {
  showText: React.ReactNode;
  hideText: React.ReactNode;
}
