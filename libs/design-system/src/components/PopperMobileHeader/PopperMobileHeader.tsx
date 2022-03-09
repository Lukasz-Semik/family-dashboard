import { ButtonCloseAnimated } from '../Button/ButtonCloseAnimated/ButtonCloseAnimated';
import {
  StyledHeader,
  StyledLine,
  StyledTitle,
} from './PopperMobileHeader.styled';

interface Props {
  label: React.ReactNode;
  close: () => void;
}

export function PopperMobileHeader({ label, close }: Props) {
  return (
    <StyledHeader>
      <StyledTitle>{label}</StyledTitle>
      <ButtonCloseAnimated onClick={close} />
      <StyledLine />
    </StyledHeader>
  );
}
