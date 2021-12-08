import { css, keyframes } from 'styled-components';

import { dsStyles } from './styles';
import { Typography16Regular } from './typography';

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

// TODO: reuse it
export const cssLinkLike = css`
  ${Typography16Regular}
  color: ${dsStyles.colors.blue1};
  text-align: center;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
