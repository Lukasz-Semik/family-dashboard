import styled, { css } from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography16Regular } from '../../../utils/typography';

export const StyledRadioInputWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
`;

export const StyledCheckedIndicator = styled.div<{ isVisible: boolean }>`
  background-color: ${dsStyles.colors.orange3};
  border-radius: 50%;
  height: 14px;
  width: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  transition: background-color ${dsStyles.transitions.standard},
    opacity ${dsStyles.transitions.standard},
    transform ${dsStyles.transitions.standard};
  opacity: 0;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    `};
`;

export const StyledRadioInput = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  font: inherit;
  width: 1.5rem;
  height: 1.5rem;
  box-sizing: border-box;
  border: 2px solid ${dsStyles.colors.violet4};
  border-radius: 50%;
  background-color: ${dsStyles.colors.grey3};
  transition: border-color ${dsStyles.transitions.standard};
  outline: none;
`;

export const StyledLabel = styled.label`
  ${Typography16Regular};
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${dsStyles.colors.violet4};
  transition: color ${dsStyles.transitions.standard};

  &:hover {
    color: ${dsStyles.colors.violet2};

    ${StyledCheckedIndicator} {
      background-color: ${dsStyles.colors.violet1};
    }

    ${StyledRadioInput} {
      border-color: ${dsStyles.colors.violet2};
    }
  }

  &:focus-within {
    color: ${dsStyles.colors.orange4};

    ${StyledCheckedIndicator} {
      background-color: ${dsStyles.colors.orange3};
    }

    ${StyledRadioInput} {
      border-color: ${dsStyles.colors.orange4};
    }
  }
`;
