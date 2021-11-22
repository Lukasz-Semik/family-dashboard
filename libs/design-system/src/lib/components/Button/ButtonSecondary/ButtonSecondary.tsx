import { ButtonProps } from '../Button.types';
import { ButtonContent } from '../ButtonContent/ButtonContent';
import { StyledButton } from './ButtonSecondary.styled';

export const ButtonSecondary = ({
  children,
  isLoading,
  disabled,
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled || isLoading} {...restProps}>
      <ButtonContent isLoading={isLoading}>{children}</ButtonContent>
    </StyledButton>
  );
};
