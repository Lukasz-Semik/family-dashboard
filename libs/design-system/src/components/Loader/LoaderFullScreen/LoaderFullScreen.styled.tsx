import styled, { keyframes } from 'styled-components';

import { dsStyles } from '../../../utils/styles';
import { Typography24SemiBold } from '../../../utils/typography';

const animation = keyframes`
 from {
   opacity: 0;
 }

  to {
    opacity: 1;
  }
`;

const animation2 = keyframes`
 from {
   transform: scale(0.7)
 }

  to {
    transform: scale(1)
  }
`;

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${dsStyles.colors.white};
  animation: ${animation} 0.7s ease-in-out forwards;
`;

export const StyledLoaderWrapper = styled.div`
  margin-bottom: 2rem;
  animation: ${animation2} 0.7s ease-in-out forwards;
`;

export const StyledContentWrapper = styled.div`
  text-align: center;
  ${Typography24SemiBold};
  color: ${dsStyles.colors.grey2};
  animation: ${animation2} 0.7s ease-in-out forwards;
`;
