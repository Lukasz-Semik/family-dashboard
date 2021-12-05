import styled, { css } from 'styled-components';

import { dsStyles } from '../../../utils/styles';

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledPopper = styled.ul<{ isOpen: boolean }>`
  transition: opacity 0.3s ease-in-out;
  background-color: ${dsStyles.colors.white};
  border: 2px solid ${dsStyles.colors.orange4};
  width: 100%;
  border-radius: 8px;
  padding: 0.5rem 0.25rem 0.5rem 0.75rem;
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

export const StyledListContent = styled.div<{ $maxHeight: string }>`
  max-height: ${({ $maxHeight }) => $maxHeight};
  overflow: auto;
  padding-right: 0.25rem;

  &::-webkit-scrollbar {
    height: 3px;
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid ${dsStyles.colors.violet1};
    background-clip: padding-box;
    border-radius: 999px;
  }
`;
