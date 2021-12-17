import styled from 'styled-components';

import {
  dsStyles,
  Typography16SemiBold,
  Typography20SemiBold,
  Typography24SemiBold,
} from '@family-dashboard/design-system';

export const StyledWrapper = styled.button<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ isActive }) =>
    isActive ? dsStyles.colors.violet4 : dsStyles.colors.grey1};
  transition: color ${dsStyles.transitions.standard};
  margin-bottom: 1.5rem;

  &:hover,
  &:focus {
    color: ${dsStyles.colors.orange4};
  }
`;

export const StyledIconWrapper = styled.div`
  margin-right: 1rem;
`;

export const StyledContent = styled.div`
  ${Typography16SemiBold};
`;

export const StyledSignOutWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
