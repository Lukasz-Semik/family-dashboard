import { rgba } from 'polished';
import styled from 'styled-components';

import {
  dsStyles,
  Typography16SemiBold,
} from '@family-dashboard/design-system';

export const StyledWrapper = styled.div`
  background-color: ${rgba(dsStyles.colors.orange4, 0.5)};
  border-radius: 8px;
  height: 146px;
  display: flex;
`;

export const StyledTimesWrapper = styled.div`
  width: 35%;
  border-right: 2px solid ${dsStyles.colors.orange4};
  box-sizing: border-box;
  height: 100%;
`;

export const StyledEmptyMessage = styled.div`
  display: flex;
  width: 65%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: ${dsStyles.colors.orange5};
  ${Typography16SemiBold};
  text-align: center;
  padding: 0 8px;
`;
