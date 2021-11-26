import styled, { css } from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import {
  Typography14SemiBold,
  Typography16Regular,
} from '../../../utils/typography';

export const StyledWrapper = styled.div`
  padding-top: 0.5rem;
`;

export const StyledInput = styled.input`
  ${Typography16Regular};
  display: block;
  padding: 0;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  transition: color ${dsStyles.transitions.standard};

  &::placeholder {
    color: ${dsStyles.colors.grey2};
    transition: color ${dsStyles.transitions.standard};
  }
`;

export const StyledLabelContent = styled.span`
  ${Typography14SemiBold};
  background-color: ${dsStyles.colors.white};
  position: absolute;
  top: -7px;
  line-height: 0.8;
  transition: color ${dsStyles.transitions.standard};
`;

export const StyledLabel = styled.label<{
  hasError?: boolean;
  isDisabled?: boolean;
}>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  border: 2px solid ${dsStyles.colors.violet4};
  border-radius: 8px;
  background-color: ${dsStyles.colors.grey3};
  padding: 0 1.25rem;
  transition: border-color ${dsStyles.transitions.standard};
  cursor: text;

  ${({ isDisabled, hasError }) => {
    if (isDisabled) {
      return css`
        cursor: not-allowed;
        border-color: ${dsStyles.colors.grey2};

        ${StyledInput}, ${StyledInput}::placeholder, ${StyledLabelContent} {
          color: ${dsStyles.colors.grey2};
        }
      `;
    }

    if (hasError) {
      return css`
        color: ${dsStyles.colors.red1};
        border-color: ${dsStyles.colors.red1};

        ${StyledLabelContent} {
          color: ${dsStyles.colors.red1};
        }

        ${StyledInput}::placeholder {
          color: ${dsStyles.colors.grey2};
        }
      `;
    }

    return css`
      &:hover {
        border-color: ${dsStyles.colors.violet2};

        ${StyledLabelContent} {
          color: ${dsStyles.colors.orange4};
        }
      }

      &:focus-within {
        border-color: ${dsStyles.colors.orange4};

        ${StyledInput}::placeholder, ${StyledLabelContent} {
          color: ${dsStyles.colors.orange4};
        }
      }
    `;
  }}
`;
