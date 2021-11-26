import { createGlobalStyle } from 'styled-components';

import { dsStyles } from '../../utils/styles';

export const GlobalStylesDefault = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${dsStyles.colors.orange1};
    color: ${dsStyles.colors.violet4}
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }
`;
