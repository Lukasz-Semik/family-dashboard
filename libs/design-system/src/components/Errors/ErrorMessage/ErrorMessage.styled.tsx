import styled, { css } from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography12SemiBold } from '../../../utils/typography';
import { ErrorMessageProps } from './ErrorMessage.types';

export const StyledErrorMessage = styled.div<ErrorMessageProps>`
  position: absolute;
  ${Typography12SemiBold};
  margin-top: 4px;
  color: ${dsStyles.colors.red1};
  transition: opacity 0.2s linear, transform 0.2s linear;
  transform: scale(0.95);
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: scale(1);
      opacity: 1;
    `}
`;
