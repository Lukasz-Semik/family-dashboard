import styled from 'styled-components';

interface Props {
  $size: number;
}

export const StyledWrapper = styled.div<Props>`
  position: relative;
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
`;

export const StyledChildrenWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
