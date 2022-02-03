import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import {
  Typography16Regular,
  Typography16SemiBold,
} from '../../utils/typography';

export const StyledWrapper = styled.View`
  padding-top: 8px;
  position: relative;
`;

interface StyledLabelProps {
  bgColor: string;
}

export const StyledLabel = styled(Animated.Text)<StyledLabelProps>`
  ${Typography16SemiBold};
  color: ${styledConstants.colors.violet4};
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
  ${Typography16Regular};
`;

export const StyledErrorWrapper = styled.View`
  position: absolute;
  bottom: -18px;
`;
