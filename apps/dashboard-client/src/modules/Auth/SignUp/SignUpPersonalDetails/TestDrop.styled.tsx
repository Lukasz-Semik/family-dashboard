import styled, { css } from 'styled-components';

import {
  dsStyles,
  Typography14SemiBold,
  Typography16Regular,
  Typography20Regular,
} from '@family-dashboard/design-system';

export const StyledWrapper = styled.div`
  position: relative;
`;

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
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  border: 2px solid ${dsStyles.colors.violet4};
  border-radius: 8px;
  background-color: ${dsStyles.colors.grey3};
  padding: 0 1.25rem;
  transition: border-color ${dsStyles.transitions.standard};
  cursor: pointer;

  ${({ hasValue }) => !hasValue && `color: ${dsStyles.colors.grey2}`};

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
        color: ${dsStyles.colors.red1};
        border-color: ${dsStyles.colors.red1};

        ${StyledLabelContent} {
          color: ${dsStyles.colors.red1};
        }
      `;
    }

    if (isOpen) {
      return css`
        border-color: ${dsStyles.colors.orange4};

        ${StyledLabelContent} {
          color: ${dsStyles.colors.orange4};
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

export const StyledPopper = styled.ul<{ isOpen: boolean }>`
  transition: opacity 0.3s ease-in-out;
  background-color: ${dsStyles.colors.white};
  border: 2px solid ${dsStyles.colors.orange4};
  width: 100%;
  border-radius: 8px;
  padding: 1rem 0.75rem;
  box-sizing: border-box;
  list-style: none;
  z-index: 10000;
  outline: none;

  ${({ isOpen }) =>
    !isOpen
      ? css`
          opacity: 0;
          visibility: hidden;
        `
      : css`
          opacity: 1;
        `};
`;

export const StyledListItem = styled.li`
  padding: 0 0.5rem;
  cursor: pointer;
  color: ${dsStyles.colors.violet4};
  ${Typography16Regular};
  transition: background-color 0.3s ease-out;
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

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
  }

  &[aria-selected='true'],
  &:hover,
  &:focus {
    background-color: ${dsStyles.colors.violet1};
  }
`;
