import styled from 'styled-components/native';

import {
  Typography16Regular,
  Typography32Black,
} from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledHeader = styled.Text`
  ${Typography32Black};
  color: ${styledConstants.colors.violet4};
  margin-bottom: 64px;
`;

export const StyledSubHeader = styled.Text`
  ${Typography32Black};
  color: ${styledConstants.colors.orange4};
  margin-bottom: 16px;
`;

export const StyledDescription = styled.Text`
  ${Typography16Regular};
  color: ${styledConstants.colors.violet3};
  margin-bottom: 32px;
`;
