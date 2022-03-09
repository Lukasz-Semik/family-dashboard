import ReactModal from 'react-modal';
import styled, { css, keyframes } from 'styled-components';

import { dsStyles } from '../../../../utils/styles';

export const StyledContentWrapper = styled.div`
  padding: 16px;
`;

export const StyledPickerInputExactPopper = styled.ul<{ isOpen: boolean }>`
  transition: opacity 0.3s ease-in-out;
  background-color: ${dsStyles.colors.white};
  border: 2px solid ${dsStyles.colors.orange4};
  width: 100%;
  border-radius: 8px;
  padding: 8px;
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

const animation = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

export const StyledModalMobileDropdown = styled(ReactModal)`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  background-color: ${dsStyles.colors.white};
  animation: ${animation} ${dsStyles.transitions.standard};
  animation-fill-mode: forwards;
  padding: 0.5rem;
  padding-bottom: 2rem;
  box-sizing: border-box;
  z-index: 1000;
`;
