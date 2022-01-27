import styled from 'styled-components';

import { dsStyles } from '@family-dashboard/design-system';

export const StyledWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    display: flex;
    justify-content: center;
    width: 16rem;
  }
`;
