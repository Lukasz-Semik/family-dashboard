import styled, { keyframes } from 'styled-components';

const animation = keyframes`
 from {
   transform: scale(0.7)
 }

  to {
    transform: scale(1)
  }
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const StyledLoaderWrapper = styled.div`
  animation: ${animation} 0.7s ease-in-out forwards;
`;
