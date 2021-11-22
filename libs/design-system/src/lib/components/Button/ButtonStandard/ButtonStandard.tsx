import { ButtonProps } from '../Button.types';
import { ButtonContent } from '../ButtonContent/ButtonContent';
import { StyledButton } from './ButtonStandard.styled';

export const ButtonStandard = ({
  children,
  isLoading,
  disabled,
  maxWidth,
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled || isLoading}
      $maxWidth={maxWidth}
      {...restProps}
    >
      <ButtonContent isLoading={isLoading}>{children}</ButtonContent>
    </StyledButton>
  );
};
