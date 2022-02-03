import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  cssLinkLike,
  dsStyles,
  Typography14Regular,
  Typography16Regular,
  Typography20Regular,
  Typography24Black,
  Typography32Black,
} from '@family-dashboard/design-system';

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

export const StyledFlexForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${dsStyles.colors.white};
  border-radius: 4px;
  padding: 1rem 0.5rem;
  height: 100%;
  box-sizing: border-box;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    border-radius: 8px;
    padding: 2rem;
  }
`;

export const StyledCommonDescription = styled.p`
  ${Typography14Regular};
  color: ${dsStyles.colors.violet3};
  margin-bottom: 0.5rem;
  text-align: center;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    ${Typography16Regular};
  }
`;

export const StyledErrorBox = styled.div`
  ${Typography20Regular};
  background-color: ${dsStyles.colors.red2};
  color: ${dsStyles.colors.white};
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  margin-bottom: 1.5rem;
`;

export const StyledErrorDescription = styled.div`
  ${Typography16Regular};
  margin-bottom: 1.5rem;
  color: ${dsStyles.colors.red2};
  text-align: center;
`;

export const StyledErrorIndicatorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
