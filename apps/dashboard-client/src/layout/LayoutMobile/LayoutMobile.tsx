import { MobileFooter } from '../MobileFooter/MobileFooter';
import { MobileHeader } from '../MobileHeader/MobileHeader';
import { StyledWrapper } from './LayoutMobile.styled';

interface Props {
  children: React.ReactNode;
}

export function LayoutMobile({ children }: Props) {
  return (
    <StyledWrapper>
      <MobileHeader />
      {children}
      <MobileFooter />
    </StyledWrapper>
  );
}
