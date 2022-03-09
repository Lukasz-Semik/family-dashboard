import styled, { keyframes } from 'styled-components';

import { dsStyles } from '../../utils/styles';
import { Typography20SemiBold } from '../../utils/typography';

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
