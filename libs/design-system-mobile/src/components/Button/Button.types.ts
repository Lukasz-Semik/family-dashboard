import { PressableProps } from 'react-native';

export interface ButtonTextProps {
  text: string;
}

export interface ButtonProps extends PressableProps {
  isLoading?: boolean;
  isDisabled?: boolean;
}
