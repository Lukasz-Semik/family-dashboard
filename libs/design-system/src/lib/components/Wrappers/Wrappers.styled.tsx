import { dsStyles } from '@family-dashboard/design-system';
import styled from 'styled-components';

interface Props {
  isDisabled?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  hasError?: boolean;
}

export const StyledWrapperIconFormControl = styled.div<Props>`
  color: ${dsStyles.colors.violet4};
  margin-right: 0.875rem;
  display: flex;
  align-items: center;
  transition: color ${dsStyles.transitions.standard};

  ${({ isHovered }) => isHovered && `color: ${dsStyles.colors.violet2}`};
  ${({ isFocused }) => isFocused && `color: ${dsStyles.colors.orange4}`};
  ${({ hasError }) => hasError && `color: ${dsStyles.colors.red1}`};
  ${({ isDisabled }) => isDisabled && `color: ${dsStyles.colors.grey2}`};
`;
