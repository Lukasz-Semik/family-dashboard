import styled, { css, keyframes } from 'styled-components';

import {
  dsStyles,
  Typography12Regular,
  Typography14SemiBold,
} from '@family-dashboard/design-system';

export const StyledDescription = styled.div`
  ${Typography12Regular};
  color: ${dsStyles.colors.grey1};
`;

export const StyledList = styled.ul`
  list-style-type: none;
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIconWrapper = styled.div`
  margin-right: 8px;
`;

export const StyledTitle = styled.div<{ hasBadge?: boolean }>`
  ${Typography14SemiBold};
  color: ${dsStyles.colors.grey1};
  transition: color ${dsStyles.transitions.standard};
  max-width: ${({ hasBadge }) => (hasBadge ? '190px' : '220px')};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const animation = keyframes`
   from {
    height: 0;
    opacity: 0;
   }

   to {
    height: 25px;
     opacity: 1;
   }
`;

export const StyledListItem = styled.li<{
  shouldAnimateNow?: boolean;
  index: number;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  border-bottom: 1px solid ${dsStyles.colors.violet1};
  padding-bottom: 4px;
  cursor: pointer;
  height: 25px;
  box-sizing: border-box;

  &:hover {
    ${StyledTitle} {
      color: ${dsStyles.colors.violet2};
    }
  }

  ${({ shouldAnimateNow, index }) =>
    css`
      height: 0;
      opacity: 0;
      animation: ${animation} 0.3s linear forwards;
      animation-delay: ${shouldAnimateNow ? '0' : `${index * 0.05}s`};
    `};
`;

export const StyledDate = styled.div`
  color: ${dsStyles.colors.red2};
  ${Typography12Regular};
`;

export const StyledBadgeWrapper = styled.div`
  margin-right: 4px;
`;
