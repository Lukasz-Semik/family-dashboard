import styled from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography20Regular } from '../../../utils/typography';

interface Props {
  $maxWidth?: string;
}

export const StyledButton = styled.button<Props>`
  ${Typography20Regular};

  position: relative;
  color: ${dsStyles.colors.violet3};
  background-color: transparent;
  outline: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 3.5rem;
  width: 100%;
  border: none;
  cursor: pointer;
  ${({ $maxWidth }) => `max-width: ${$maxWidth}`};
  box-sizing: border-box;
  border: 1px solid ${dsStyles.colors.violet3};
  transition: border-color ${dsStyles.transitions.standard},
    color ${dsStyles.transitions.standard};

  &:hover,
  &:focus {
    border-color: ${dsStyles.colors.orange3};
    color: ${dsStyles.colors.violet4};
  }

  &:disabled {
    color: ${dsStyles.colors.grey2};
    border-color: ${dsStyles.colors.grey2};
    cursor: not-allowed;
  }
`;
