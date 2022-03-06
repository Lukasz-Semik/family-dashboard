import { ButtonProps } from '../Button.types';
import { ButtonContent } from '../ButtonContent/ButtonContent';
import { StyledButton } from './ButtonStandard.styled';

export const ButtonStandard = ({
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
      $maxWidth={maxWidth}
      $minHeight={minHeight}
      {...restProps}
    >
      <ButtonContent isLoading={isLoading}>{children}</ButtonContent>
    </StyledButton>
  );
};
