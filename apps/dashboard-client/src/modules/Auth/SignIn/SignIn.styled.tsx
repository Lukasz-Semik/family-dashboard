import { Link } from 'react-router-dom';
import {
  dsStyles,
  Typography14Regular,
  Typography14SemiBold,
  Typography16Regular,
  Typography16SemiBold,
  Typography24Black,
  Typography32Black,
  Typography40Black,
} from '@family-dashboard/design-system';
import styled, { keyframes } from 'styled-components';

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

const animation = keyframes`
  from {
    opactiy: 0
  }

  to {
    opacity: 1
  }
`;

export const StyledInnerWrapper = styled.div`
  opacity: 0;
  position: relative;
  box-sizing: border-box;
  padding: 0 0.5rem;
  width: 100%;
  animation: ${animation} 1s ease-in-out forwards;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    width: 30rem;
    padding: 0;
  }
`;

export const StyledForm = styled.form`
  background-color: ${dsStyles.colors.white};
  border-radius: 4px;
  padding: 1rem 0.5rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    border-radius: 8px;
    padding: 2rem;
  }
`;

export const StyledFormTitle = styled.h2`
  ${Typography24Black};
  color: ${dsStyles.colors.orange4};
  text-align: center;
  margin-bottom: 2rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    ${Typography32Black};
    margin-bottom: 1.5rem;
  }
`;

export const StyledSignUpLink = styled(Link)`
  ${Typography14SemiBold};
  color: ${dsStyles.colors.violet2};
  position: absolute;
  top: 0.75rem;
  right: 1.25rem;
  outline: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    ${Typography16SemiBold};
    top: 1rem;
    right: 1rem;
  }
`;

export const StyledDescription = styled.p`
  ${Typography14Regular};
  color: ${dsStyles.colors.violet3};
  margin-bottom: 2rem;
  text-align: center;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    ${Typography16Regular};
    top: 1rem;
    right: 1rem;
  }
`;

export const StyledEmailFieldWrapper = styled.div`
  margin-bottom: 2rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    margin-bottom: 1.5rem;
  }
`;

export const StyledPasswordFieldWrapper = styled.div`
  margin-bottom: 3.5rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    margin-bottom: 2.5rem;
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

export const StyledForgotPasswordLinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const StyledForgotPasswordLink = styled(Link)`
  ${Typography16Regular}
  color: ${dsStyles.colors.blue1};
  text-align: center;
  outline: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;
