import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  cssFadeIn,
  dsStyles,
  Typography14Regular,
  Typography14SemiBold,
  Typography16Regular,
  Typography16SemiBold,
} from '@family-dashboard/design-system';

export const StyledInnerWrapper = styled.div`
  ${cssFadeIn};
  position: relative;
  box-sizing: border-box;
  padding: 0 0.5rem;
  width: 100%;

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

export const StyledFormTitleWrapper = styled.div`
  margin-bottom: 2rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
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
  margin-bottom: 1.5rem;
  text-align: center;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    ${Typography16Regular};
  }
`;

export const StyledEmailFieldWrapper = styled.div`
  margin-bottom: 2rem;
`;

export const StyledPasswordFieldWrapper = styled.div`
  margin-bottom: 3.5rem;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    margin-bottom: 2.5rem;
  }
`;
