export interface InputRenderProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  openPicker: () => void;
  handleKeyOnInput: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export interface DatePickerRenderErrorProps {
  hasError?: boolean;
}

export interface DatePickerInputExactProps {
  value: string;
  onChange: (value: string) => void;
  label: React.ReactNode;
  renderError?: (renderProps: DatePickerRenderErrorProps) => React.ReactNode;
  hasError?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  placeholder?: string;
  labelBgColor?: string;
}
