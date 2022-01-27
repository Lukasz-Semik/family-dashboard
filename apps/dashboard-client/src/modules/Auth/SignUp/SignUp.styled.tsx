import styled from 'styled-components';

import { cssFadeIn, dsStyles } from '@family-dashboard/design-system';

export const StyledInnerWrapper = styled.div`
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

export const StyledForm = styled.form`
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

export const StyledFormTitleHeader = styled.header`
  margin-bottom: 1.5rem;
`;

export const StyledLoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
