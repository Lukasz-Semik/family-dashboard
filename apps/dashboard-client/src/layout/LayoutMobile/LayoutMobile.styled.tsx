import styled from 'styled-components';

import { dsStyles } from '@family-dashboard/design-system';

import { MOBILE_HEADER_HEIGHT } from '../Layout.const';

export const StyledWrapper = styled.div`
  padding-top: ${MOBILE_HEADER_HEIGHT};
  padding-bottom: ${MOBILE_HEADER_HEIGHT};
  max-height: 100vh;
  box-sizing: border-box;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 3px;
    width: 3px;
  }

  &::-webkit-scrollbar-thumb {
    height: 6px;
    border: 4px solid ${dsStyles.colors.violet1};
    background-clip: padding-box;
    border-radius: 999px;
  }
`;
