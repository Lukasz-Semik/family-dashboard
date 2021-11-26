import styled from 'styled-components';

import { dsStyles, Typography12Regular } from '@family-dashboard/design-system';

export const StyledIndicatorProgressWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 1rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    right: 2rem;
    top: 28px;
  }
`;

export const StyledIndicatorStep = styled.div`
  ${Typography12Regular};
  color: ${dsStyles.colors.violet3};
`;
