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
          height="1.5rem"
          width="1.5rem"
          color={dsStyles.colors.orange4}
        />
      </button>

      <StyledTitle>{headerText}</StyledTitle>

      <button onClick={() => console.log('Chat trigger')}>
        <IconMessage
          height="1.5rem"
          width="1.5rem"
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
