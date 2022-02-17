import styled from 'styled-components/native';

import { Typography16SemiBold } from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 8px;
  margin-bottom: 16px;
`;

export const StyledText = styled.Text`
  ${Typography16SemiBold};
  color: ${styledConstants.colors.grey2};
`;
