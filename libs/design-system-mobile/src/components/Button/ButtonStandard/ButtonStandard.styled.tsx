import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledWrapper = styled(Animated.View)`
  border-radius: 8px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled(Animated.Text)`
  color: ${styledConstants.colors.white};
  font-family: ${styledConstants.fontFamily.main};
  font-size: 20px;
`;
