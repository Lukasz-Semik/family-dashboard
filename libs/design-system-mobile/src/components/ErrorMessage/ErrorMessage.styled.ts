import { Animated } from 'react-native';
import styled from 'styled-components';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledErrorMessage = styled(Animated.Text)`
  color: ${styledConstants.colors.red1};
  font-family: ${styledConstants.fontFamily.main};
`;
