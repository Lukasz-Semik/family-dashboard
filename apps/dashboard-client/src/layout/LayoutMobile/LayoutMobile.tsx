import { MobileFooter } from '../MobileFooter/MobileFooter';
import { MobileHeader } from '../MobileHeader/MobileHeader';
import { StyledContentWrapper, StyledWrapper } from './LayoutMobile.styled';

interface Props {
  children: React.ReactNode;
}

export function LayoutMobile({ children }: Props) {
  return (
    <StyledWrapper>
      <MobileHeader />
      <StyledContentWrapper>{children}</StyledContentWrapper>
      <MobileFooter />
    </StyledWrapper>
  );
}
