import styled, { css } from 'styled-components';

import { dsStyles } from '../../utils/styles';
import { Typography12SemiBold } from '../../utils/typography';
import { ErrorMessageProps } from './ErrorMessage.types';

export const StyledErrorMessage = styled.div<ErrorMessageProps>`
  ${Typography12SemiBold};
  margin-top: 4px;
  color: ${dsStyles.colors.red1};
  transition: max-height ${dsStyles.transitions.standard},
    opacity ${dsStyles.transitions.standard};
  max-height: 0;
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      max-height: 12px;
      opacity: 1;
    `}
`;
