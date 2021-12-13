import styled from 'styled-components';

import { dsStyles } from '@family-dashboard/design-system';

export const StyledDescriptionWrapper = styled.div`
  margin-bottom: 2.5rem;
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  margin: 0 auto 2.5rem auto;
  margin-bottom: 2.5rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    display: flex;
    justify-content: center;
    width: 16rem;
  }
`;
