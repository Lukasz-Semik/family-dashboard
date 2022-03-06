import styled from 'styled-components';

import { dsStyles } from '@family-dashboard/design-system';

export const StyledWrapper = styled.div`
  max-width: 48rem;
  padding: 0 8px 24px;

  @media screen and (min-width: ${dsStyles.breakpoints.md}px) {
    padding: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const StyledMarginWrapper = styled.div`
  margin-bottom: 24px;
`;

export const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    flex-direction: row;
  }
`;

export const StyledLeftColumn = styled.div`
  order: 1;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    order: 0;
    margin-right: 24px;
  }
`;

export const StyledRightColumn = styled.div`
  margin-bottom: 24px;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    margin: 0;
  }
`;
