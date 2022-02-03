import styled from 'styled-components';

import {
  cssFadeIn,
  dsStyles,
  Typography24Black,
  Typography40Black,
} from '@family-dashboard/design-system';

export const StyledHeader = styled.header`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 3.5rem;
  top: 0;
  left: 0;
  background-color: ${dsStyles.colors.white};
  display: flex;
  align-items: center;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    top: 2rem;
    left: 4rem;
    background-color: transparent;
    width: auto;
  }
`;

export const StyledHeaderTitle = styled.h1`
  ${Typography24Black};
  text-align: center;
  width: 100%;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    ${Typography40Black};
    text-align: start;
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding-top: 3.5rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    padding: 0;
  }
`;

export const StyledContentWrapper = styled.div`
  ${cssFadeIn};
  position: relative;
  box-sizing: border-box;
  height: 30.5rem;
  width: 100%;
  padding: 0.5rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    width: 30rem;
  }
`;
