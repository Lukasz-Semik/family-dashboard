import styled from 'styled-components';

import { dsStyles, Typography16Black } from '@family-dashboard/design-system';

import { MOBILE_HEADER_HEIGHT } from '../Layout.const';

export const StyledWrapper = styled.header`
  position: fixed;
  width: 100%;
  height: ${MOBILE_HEADER_HEIGHT};
  padding: 0 1.5rem;
  box-sizing: border-box;
  background-color: ${dsStyles.colors.white};
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h1`
  ${Typography16Black};
  color: ${dsStyles.colors.violet4};
`;
