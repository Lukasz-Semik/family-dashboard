import { useState } from 'react';

import {
  dsStyles,
  IconHamburger,
  IconMessage,
} from '@family-dashboard/design-system';

import { useHeaderText } from '../hooks/useHeaderText';
import { SidebarMobile } from '../Sidebar/SidebarMobile/SidebarMobile';
import { StyledTitle, StyledWrapper } from './MobileHeader.styled';

export function MobileHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { headerText } = useHeaderText();

  return (
    <StyledWrapper>
      <button onClick={() => setIsSidebarOpen(true)}>
        <IconHamburger
          height="28px"
          width="28px"
          color={dsStyles.colors.orange3}
        />
      </button>

      <StyledTitle>{headerText}</StyledTitle>

      <button onClick={() => console.log('Chat trigger')}>
        <IconMessage
          height="28px"
          width="28px"
          color={dsStyles.colors.violet2}
        />
      </button>

      <SidebarMobile
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />
    </StyledWrapper>
  );
}
