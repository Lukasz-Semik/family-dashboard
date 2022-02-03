import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledWrapper = styled.View`
  padding-top: 8px;
  position: relative;
`;

export const StyledLabel = styled(Animated.Text)<{
  bgColor: string;
}>`
  font-size: 14px;
  line-height: 16px;
  font-weight: ${styledConstants.fontWeight.bold};
  color: ${styledConstants.colors.violet4};
  font-family: ${styledConstants.fontFamily.main};
  background-color: ${({ bgColor }) => bgColor};
  position: absolute;
  top: -8px;
  left: 20px;
  z-index: 1;
`;

export const StyledInputWrapper = styled(Animated.View)`
  position: relative;
  height: 56px;
  border: 2px solid ${styledConstants.colors.violet4};
  border-radius: 8px;
  background-color: ${styledConstants.colors.grey3};
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledInput = styled.TextInput`
  width: 100%;
  height: 100%;
  font-family: ${styledConstants.fontFamily.main};
  line-height: 18px;
`;

export const StyledErrorWrapper = styled.View`
  position: absolute;
  bottom: -18px;
`;
