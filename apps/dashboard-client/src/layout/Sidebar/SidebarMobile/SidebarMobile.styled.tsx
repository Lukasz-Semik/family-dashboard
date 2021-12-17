import styled from 'styled-components';

import { dsStyles } from '@family-dashboard/design-system';

export const StyledWrapper = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  bottom: 0;
  width: 100vw;
  background-color: ${dsStyles.colors.white};
  box-sizing: border-box;
  padding-top: 2rem;
  padding-left: 2rem;
  transition: left ${dsStyles.transitions.standard};
`;

export const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
