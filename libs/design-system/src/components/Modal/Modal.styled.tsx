import ReactModal from 'react-modal';
import styled, { keyframes } from 'styled-components';

import { dsStyles } from '../../utils/styles';
import {
  Typography16Regular,
  Typography20Regular,
  Typography24Black,
} from '../../utils/typography';

const animation = keyframes`
  from {
    transform: scale(0.8);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const StyledWrapper = styled(ReactModal)`
  position: relative;
  outline: none;
  background-color: ${dsStyles.colors.white};
  width: 32rem;
  box-sizing: border-box;
  max-width: 100%;
  border-radius: 8px;
  padding: 2rem;
  animation: ${animation} 0.3s ease-in-out;
`;

export const StyledCloseButtonWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const StyledTitle = styled.h2`
  ${Typography24Black};
  color: ${dsStyles.colors.orange4};
  padding-right: 1rem;
  margin-bottom: 2rem;
`;

export const StyledText = styled.p`
  color: ${dsStyles.colors.violet3};
  ${Typography16Regular};
  margin-bottom: 2rem;
`;

export const StyledButtonsRow = styled.div`
  button {
    min-height: 3rem;
  }

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      min-height: 3.5rem;
    }
  }
`;

export const StyledConfirmButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;
