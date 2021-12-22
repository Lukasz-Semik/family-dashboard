import styled from 'styled-components';

import { dsStyles } from '@family-dashboard/design-system';

export const StyledEditIconWrapper = styled.div<{ isMarked: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  color: ${({ isMarked }) =>
    isMarked ? dsStyles.colors.violet2 : dsStyles.colors.grey1};
  transition: color ${dsStyles.transitions.standard};
  display: flex;
  align-items: center;

  @media screen and (min-width: ${dsStyles.breakpoints.md}px) {
    position: static;
  }
`;
