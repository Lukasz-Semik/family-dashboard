import styled from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography20Regular } from '../../../utils/typography';

interface Props {
  $maxWidth?: string;
  $minHeight?: string;
}

export const StyledButton = styled.button<Props>`
  ${Typography20Regular};

  position: relative;
  color: ${dsStyles.colors.white};
  background-color: ${dsStyles.colors.orange3};
  outline: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${({ $minHeight }) => $minHeight || '56px'};
  width: 100%;
  border: none;
  cursor: pointer;
  ${({ $maxWidth }) => `max-width: ${$maxWidth}`};

  transition: background-color ${dsStyles.transitions.standard},
    color ${dsStyles.transitions.standard};

  &:hover,
  &:focus {
    background-color: ${dsStyles.colors.orange5};
  }

  &:disabled {
    background-color: ${dsStyles.colors.orange2};
    color: ${dsStyles.colors.grey2};
    cursor: not-allowed;
  }
`;
