import styled, { css } from 'styled-components';

import { StyledIcon } from '../../icons/Icons.styled';
import { dsStyles } from '../../utils/styles';
import {
  Typography14SemiBold,
  Typography16Regular,
} from '../../utils/typography';

export const StyledLabelContent = styled.span`
  ${Typography14SemiBold};
  color: ${dsStyles.colors.violet4};
  background-color: ${dsStyles.colors.white};
  position: absolute;
  top: -7px;
  line-height: 0.8;
  transition: color ${dsStyles.transitions.standard};
`;

export const StyledTrigger = styled.button<{
  hasError?: boolean;
  isDisabled?: boolean;
  hasValue?: boolean;
  isOpen?: boolean;
}>`
  ${Typography16Regular};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  border: 2px solid ${dsStyles.colors.violet4};
  border-radius: 8px;
  background-color: ${dsStyles.colors.grey3};
  padding: 0 1.25rem;
  transition: border-color ${dsStyles.transitions.standard};
  cursor: pointer;
  outline: none;

  ${StyledIcon} {
    color: ${dsStyles.colors.grey2};
    transition: transform ${dsStyles.transitions.standard},
      color ${dsStyles.transitions.standard};
  }

  ${({ hasValue }) => !hasValue && `color: ${dsStyles.colors.grey2}`};

  ${({ hasError, isOpen }) =>
    hasError &&
    isOpen &&
    css`
      ${StyledIcon} {
        transform: rotateX(180deg);
      }
    `};

  ${({ isDisabled, hasError, isOpen }) => {
    if (isDisabled) {
      return css`
        cursor: not-allowed;
        border-color: ${dsStyles.colors.grey2};

        ${StyledLabelContent} {
          color: ${dsStyles.colors.grey2};
        }
      `;
    }

    if (hasError) {
      return css`
        border-color: ${dsStyles.colors.red1};

        ${StyledLabelContent} {
          color: ${dsStyles.colors.red1};
        }

        &:hover {
          border-color: ${dsStyles.colors.violet2};
        }

        &:focus {
          border-color: ${dsStyles.colors.orange4};
        }

        ${isOpen && `border-color: ${dsStyles.colors.orange4}`}
      `;
    }

    if (isOpen) {
      return css`
        border-color: ${dsStyles.colors.orange4};

        ${StyledLabelContent} {
          color: ${dsStyles.colors.orange4};
        }

        ${StyledIcon} {
          color: ${dsStyles.colors.orange4};
          transform: rotateX(180deg);
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

      &:focus {
        border-color: ${dsStyles.colors.orange4};

        ${StyledLabelContent} {
          color: ${dsStyles.colors.orange4};
        }
      }
    `;
  }}
`;

export const StyledListItem = styled.li`
  padding: 0 0.5rem;
  cursor: pointer;
  color: ${dsStyles.colors.violet4};
  ${Typography16Regular};
  transition: background-color ${dsStyles.transitions.standard},
    border-color ${dsStyles.transitions.standard};
  list-style: none;
  max-width: 100%;
  overflow-x: hidden;
  text-overflow: ellipsis;
  height: 2.5rem;
  background-color: ${dsStyles.colors.white};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${dsStyles.colors.orange2};
  box-sizing: border-box;
  padding-top: 4px;

  &:not(:last-of-type) {
    margin-bottom: 0.25rem;
  }

  &[aria-selected='true'],
  &:hover,
  &:focus {
    background-color: ${dsStyles.colors.violet1};
    border-bottom-color: transparent;
  }
`;
