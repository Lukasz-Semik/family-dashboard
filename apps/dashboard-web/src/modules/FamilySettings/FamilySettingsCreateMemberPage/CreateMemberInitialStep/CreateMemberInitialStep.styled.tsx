import styled from 'styled-components';

import {
  cssLinkLike,
  dsStyles,
  Typography12Regular,
  Typography24SemiBold,
} from '@family-dashboard/design-system';

export const StyledTitle = styled.h2`
  ${Typography24SemiBold};
  color: ${dsStyles.colors.orange4};
  margin-bottom: 0.5rem;
`;

export const StyledLearnMoreButton = styled.button`
  ${cssLinkLike};
  margin-bottom: 2rem;
`;

export const StyledRadioWrapper = styled.div`
  margin-bottom: 0.5rem;
`;

export const StyledDescription = styled.p`
  ${Typography12Regular};
  color: ${dsStyles.colors.grey1};
  margin-bottom: 1rem;
  max-width: 26rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    width: 20rem;
  }
`;
