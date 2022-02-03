import { Animated } from 'react-native';
import styled from 'styled-components';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import { Typography12SemiBold } from '../../utils/typography';

export const StyledErrorMessage = styled(Animated.Text)`
  ${Typography12SemiBold};
  color: ${styledConstants.colors.red1};
`;
