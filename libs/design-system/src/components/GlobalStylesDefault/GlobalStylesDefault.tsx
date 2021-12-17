import { createGlobalStyle, keyframes } from 'styled-components';

import { dsStyles } from '../../utils/styles';

const animation = keyframes`
  from {
    background-color: rgba(122, 105, 120, 0);

  }

  to {
    background-color: rgba(122, 105, 120, 0.4);
  }
`;

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
    font-family: 'Montserrat', sans-serif;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
  }

  .modal-basic-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(122, 105, 120, 0.4);
    z-index: 10001;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${animation} 0.3s ease-in-out;
    padding: 0.5rem;
  }
`;
