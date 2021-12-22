import styled from 'styled-components';

import {
  dsStyles,
  Typography16Regular,
  Typography24SemiBold,
} from '@family-dashboard/design-system';

export const StyledAddMemberButtonWrapper = styled.div`
  padding-top: 1rem;
  margin-bottom: 2rem;

  @media screen and (min-width: ${dsStyles.breakpoints.md}px) {
    max-width: 20rem;
  }
`;

export const StyledListsWrapper = styled.div`
  width: 39rem;
  max-width: 100%;
`;

export const StyledListWrapper = styled.div`
  margin-bottom: 4rem;
`;

export const StyledListTitle = styled.h3`
  ${Typography24SemiBold};
  border-bottom: 1px solid ${dsStyles.colors.orange4};
  color: ${dsStyles.colors.orange4};
  padding-bottom: 1rem;
  margin-bottom: 1rem;
`;

export const StyledContentWithIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIconWrapper = styled.div`
  margin-right: 1rem;
  color: ${dsStyles.colors.violet2};
`;

export const StyledDescriptionColumnContent = styled.div<{ isMarked: boolean }>`
  color: ${dsStyles.colors.grey1};
  transition: color ${dsStyles.transitions.standard};

  @media screen and (min-width: ${dsStyles.breakpoints.md}px) {
    ${Typography16Regular};
    color: ${({ isMarked }) =>
      isMarked ? dsStyles.colors.violet2 : dsStyles.colors.violet4}
`;

export const StyledDescriptionColumnLabel = styled.span`
  @media screen and (min-width: ${dsStyles.breakpoints.md}px) {
    display: none;
  }
`;
