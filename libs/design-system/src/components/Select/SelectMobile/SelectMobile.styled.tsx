import ReactModal from 'react-modal';
import styled, { keyframes } from 'styled-components';

import { dsStyles } from '../../../utils/styles';

const animation = keyframes`
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
`;

export const StyledWrapper = styled.div`
  padding-top: 0.5rem;
  position: relative;
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

export const StyledList = styled.ul`
  max-height: calc(100% - 2rem);
  list-style: none;
  overflow: auto;

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
