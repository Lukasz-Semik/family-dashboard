import { ButtonProps } from '../Button.types';
import { ButtonContent } from '../ButtonContent/ButtonContent';
import { StyledButton } from './ButtonSecondary.styled';

export const ButtonSecondary = ({
  children,
  isLoading,
  disabled,
  maxWidth,
  minHeight,
  ...restProps
}: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled || isLoading}
      $minHeight={minHeight}
      $maxWidth={maxWidth}
      {...restProps}
    >
      <ButtonContent isLoading={isLoading}>{children}</ButtonContent>
    </StyledButton>
  );
};
