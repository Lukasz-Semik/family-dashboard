import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledLayoutBasic = styled.View`
  padding: 16px;
  background-color: ${styledConstants.colors.orange1};
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

export const StyledHeaderWrapper = styled.View`
  height: 56px;
  padding-right: 24px;
  padding-left: 24px;
  background-color: ${styledConstants.colors.white};
`;

export const StyledContentWrapper = styled.View`
  padding-right: 24px;
  padding-left: 24px;
  background-color: ${styledConstants.colors.orange1};
  height: 100%;
`;
