import { IconBackArrow } from '../../../icons/Icons';
import { dsStyles } from '../../../utils/styles';
import { ButtonProps } from '../Button.types';
import { StyledBackButton, StyledIconWrapper } from './ButtonArrowBack.styled';

export function ButtonArrowBack({ children, ...restProps }: ButtonProps) {
  return (
    <StyledBackButton {...restProps}>
      <StyledIconWrapper>
        <IconBackArrow
          width="1rem"
          height="1rem"
          color={dsStyles.colors.violet1}
        />
      </StyledIconWrapper>
      {children}
    </StyledBackButton>
  );
}
