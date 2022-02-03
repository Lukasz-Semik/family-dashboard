import styled from 'styled-components';

import { dsStyles, Typography40Black } from '@family-dashboard/design-system';

import { SIDEBAR_WIDTH } from '../Layout.const';

export const StyledWraper = styled.div`
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    padding-left: ${SIDEBAR_WIDTH};
  }
`;

export const StyledContentWrapper = styled.div`
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  overflow: auto;
  position: relative;

  @media screen and (min-width: ${dsStyles.breakpoints.xs}px) {
    padding-top: 2rem;
    padding-left: 2.5rem;
  }
`;

export const StyledTitle = styled.h1`
  ${Typography40Black};
  color: ${dsStyles.colors.violet4};
  margin-bottom: 1rem;
`;
