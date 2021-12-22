import styled from 'styled-components';

import {
  dsStyles,
  Typography14SemiBold,
} from '@family-dashboard/design-system';

export const StyledCancelButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  ${Typography14SemiBold};
  color: ${dsStyles.colors.grey1};
  transition: color ${dsStyles.transitions.standard};
  display: flex;
  align-items: center;

  @media screen and (min-width: ${dsStyles.breakpoints.md}px) {
    position: static;
  }

  &:hover,
  &:focus {
    color: ${dsStyles.colors.red2};
  }
`;

export const StyledIconCancelWrapper = styled.div`
  margin-right: 0.5rem;
  transform: translateY(-1px);
`;
