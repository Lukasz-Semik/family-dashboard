import { css, keyframes } from 'styled-components';

const animation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`;

export const cssFadeIn = css`
  opacity: 0;
  animation: ${animation} 0.7s ease-in-out forwards;
`;
