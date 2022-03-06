import { IconExclamation } from '../../../icons/Icons';
import { StyledIconWrapper, StyledWrapper } from './ErrorBox.styled';
import { ErrorBoxProps } from './ErrorBox.types';

export function ErrorBox({ children }: ErrorBoxProps) {
  return (
    <StyledWrapper>
      <StyledIconWrapper>
        <IconExclamation width="1rem" height="1.25rem" />
      </StyledIconWrapper>
      {children}
    </StyledWrapper>
  );
}
