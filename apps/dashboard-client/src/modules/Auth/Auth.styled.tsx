import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  cssLinkLike,
  dsStyles,
  Typography24Black,
  Typography32Black,
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

export const StyledInnerWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  height: 30.5rem;
  width: 100%;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    width: 30rem;
  }
`;

export const StyledFormTitle = styled.h2`
  ${Typography24Black};
  color: ${dsStyles.colors.orange4};
  text-align: center;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    ${Typography32Black};
  }
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 1rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    display: flex;
    justify-content: center;
    width: 16rem;
  }
`;

export const StyledLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledLink = styled(Link)`
  ${cssLinkLike}
  text-align: center;
`;
