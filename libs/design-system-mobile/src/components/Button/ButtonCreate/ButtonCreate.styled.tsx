import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import { Typography14SemiBold } from '../../../utils/typography';

export const StyledText = styled.Text`
  ${Typography14SemiBold};
  color: ${styledConstants.colors.blue1};
`;
