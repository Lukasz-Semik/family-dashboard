import styled from 'styled-components';

import { dsStyles } from '@family-dashboard/design-system';

import { MOBILE_HEADER_HEIGHT } from '../Layout.const';

export const StyledWrapper = styled.nav`
  position: fixed;
  width: 100%;
  height: ${MOBILE_HEADER_HEIGHT};
  padding: 0 2rem;
  box-sizing: border-box;
  background-color: ${dsStyles.colors.white};
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${dsStyles.colors.grey2};
`;
