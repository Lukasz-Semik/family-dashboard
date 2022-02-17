import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledLayoutBasic = styled.View`
  padding: 16px;
  background-color: ${styledConstants.colors.orange1};
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledLayoutBackground = styled.View`
  background-color: ${styledConstants.colors.orange1};
  height: 100%;
`;

export const StyledLayoutCard = styled.View`
  background-color: ${styledConstants.colors.white};
  padding: 16px;
  border-radius: 8px;
`;
