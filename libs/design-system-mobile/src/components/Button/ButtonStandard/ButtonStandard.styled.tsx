import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import { Typography20Regular } from '../../../utils/typography';

export const StyledWrapper = styled(Animated.View)`
  border-radius: 8px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled(Animated.Text)`
  color: ${styledConstants.colors.white};
  ${Typography20Regular};
`;
