import styled from 'styled-components/native';

import {
  Typography16Black,
  Typography20SemiBold,
} from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledTitle = styled.Text`
  color: ${styledConstants.colors.orange4};
  ${Typography16Black};
`;

export const StyledTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledHeader = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledEmptyMessage = styled.Text`
  ${Typography20SemiBold};
  color: ${styledConstants.colors.grey2};
  padding-top: 24px;
  margin-bottom: 24px;
  text-align: center;
  width: 200px;
`;
