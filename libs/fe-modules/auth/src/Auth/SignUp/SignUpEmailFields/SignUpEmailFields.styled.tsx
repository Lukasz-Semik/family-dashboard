import styled from 'styled-components';

import {
  dsStyles,
  Typography14Regular,
  Typography16Regular,
} from '@family-dashboard/design-system';

export const StyledDescription = styled.p`
  ${Typography14Regular};
  color: ${dsStyles.colors.violet3};
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    ${Typography16Regular};
  }
`;

export const StyledEmailFieldWrapper = styled.div`
  margin-bottom: 2rem;
`;
