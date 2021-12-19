import styled from 'styled-components';

import { dsStyles, Typography24Black } from '@family-dashboard/design-system';

export const StyledWrapper = styled.nav<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
  bottom: 0;
  width: 100vw;
  background-color: ${dsStyles.colors.white};
  box-sizing: border-box;
  padding-top: 1.5rem;
  padding-left: 2rem;
  transition: left ${dsStyles.transitions.standard};
`;

export const StyledButtonWrapper = styled.div`
  position: absolute;
  top: 1.25rem;
  right: 1.5rem;
`;

export const StyledTitle = styled.h2`
  ${Typography24Black};
  color: ${dsStyles.colors.orange4};
  margin-bottom: 2.5rem;
`;
