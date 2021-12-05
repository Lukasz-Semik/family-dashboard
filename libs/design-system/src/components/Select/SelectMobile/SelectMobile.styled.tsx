import ReactModal from 'react-modal';
import styled, { keyframes } from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography20SemiBold } from '../../../utils/typography';

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
`;

export const StyledTitle = styled.div`
  ${Typography20SemiBold};
`;

export const StyledHeader = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
`;

const animation2 = keyframes`
  from {
    transform: scaleX(0);
  }

  to {
    transform: scaleX(1);
  }
`;

export const StyledLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background-color: ${dsStyles.colors.orange4};
  transform: scaleX(0);
  animation: ${animation2} 0.7s ease-out;
  animation-fill-mode: forwards;
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
