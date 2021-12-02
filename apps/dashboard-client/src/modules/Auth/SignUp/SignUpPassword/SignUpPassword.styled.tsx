import styled, { css } from 'styled-components';

import { dsStyles } from '@family-dashboard/design-system';

export const StyledFieldWrapper = styled.div`
  margin-bottom: 3rem;
`;

export const StyledAllTextsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const StyledIconWrapper = styled.div`
  position: relative;
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`;

export const StyledText = styled.span<{ isValid: boolean }>`
  transition: color ${dsStyles.transitions.standard};

  color: ${({ isValid }) =>
    isValid ? dsStyles.colors.green1 : dsStyles.colors.red2};
`;

export const StyledIconInnerWrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  opacity: 0;
  transform: scale(0.5);

  transition: opacity ${dsStyles.transitions.standard},
    transform ${dsStyles.transitions.standard};

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: scale(1);
    `};
`;
