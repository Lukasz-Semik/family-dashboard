import styled, { css } from 'styled-components';

import {
  dsStyles,
  Typography16Regular,
  Typography20Regular,
} from '@family-dashboard/design-system';

export const StyledErrorBox = styled.div`
  ${Typography20Regular};
  background-color: ${dsStyles.colors.red2};
  color: ${dsStyles.colors.white};
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  margin-bottom: 1.5rem;
`;

export const StyledDescription = styled.div`
  ${Typography16Regular};
  margin-bottom: 1.5rem;
  color: ${dsStyles.colors.red2};
  text-align: center;
`;

export const StyledCrossmarkWrapper = styled.span<{ isVisible?: boolean }>`
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

export const StyledIndicatorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
