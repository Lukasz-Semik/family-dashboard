import styled from 'styled-components/native';

import { Typography16Black } from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledTitle = styled.Text`
  ${Typography16Black};
  color: ${styledConstants.colors.violet4};
`;
