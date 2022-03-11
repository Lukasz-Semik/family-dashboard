import styled from 'styled-components';

import {
  dsStyles,
  Typography12Regular,
  Typography14SemiBold,
} from '@family-dashboard/design-system';

export const StyledDescription = styled.div`
  ${Typography12Regular};
  color: ${dsStyles.colors.grey1};
  margin-bottom: 16px;
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

export const StyledTitle = styled.div`
  ${Typography14SemiBold};
  color: ${dsStyles.colors.grey1};
  transition: color ${dsStyles.transitions.standard};
  text-overflow: ellipsis;
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  border-bottom: 1px solid ${dsStyles.colors.violet1};
  padding-bottom: 4px;
  cursor: pointer;

  &:hover {
    ${StyledTitle} {
      color: ${dsStyles.colors.violet2};
    }
  }
`;

export const StyledDate = styled.div`
  color: ${dsStyles.colors.red2};
  ${Typography12Regular};
`;

export const StyledBadgeWrapper = styled.div`
  margin-right: 4px;
`;
