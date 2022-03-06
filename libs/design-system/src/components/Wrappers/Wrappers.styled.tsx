import styled, { css } from 'styled-components';

import { dsStyles } from '../../utils/styles';

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

export const StyledWrapperRoundShowAnimation = styled.span<{
  isVisible?: boolean;
}>`
  * {
    transform: rotateZ(-90deg) scale(0.8);
    opacity: 0;
    transition: transform 0.7s linear, opacity 0.7s linear;

    ${({ isVisible }) =>
      isVisible &&
      css`
        transform: rotateZ(0) scale(1);
        opacity: 1;
      `};
  }
`;

export const StyledWrapperCard = styled.div<{ $height?: string }>`
  background-color: ${dsStyles.colors.white};
  border-radius: 8px;
  padding: 1rem;
  height: ${({ $height }) => $height || 'auto'};
`;
