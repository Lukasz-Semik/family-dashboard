import { ButtonCloseAnimated } from '@family-dashboard/design-system';

import { ItemsList } from '../ItemsList/ItemsList';
import { StyledButtonWrapper, StyledWrapper } from './SidebarMobile.styled';

interface Props {
  isOpen: boolean;
  closeSidebar: () => void;
}

export function SidebarMobile({ isOpen, closeSidebar }: Props) {
  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledButtonWrapper>
        <ButtonCloseAnimated onClick={closeSidebar} />
      </StyledButtonWrapper>
      <ItemsList closeSidebar={closeSidebar} />
    </StyledWrapper>
  );
}
