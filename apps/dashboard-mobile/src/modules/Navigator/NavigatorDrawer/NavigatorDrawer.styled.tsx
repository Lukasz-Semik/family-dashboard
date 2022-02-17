import styled from 'styled-components/native';

import {
  Typography16SemiBold,
  Typography24Black,
} from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export const StyledWrapper = styled.View`
  height: 100%;
  position: relative;
  padding-top: 64px;
`;

export const StyledTitle = styled.Text`
  ${Typography24Black};
  color: ${styledConstants.colors.orange4};
`;

export const StyledCloseWrapper = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: 3px solid ${styledConstants.colors.grey1};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const StyledItemWrapper = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
`;

export const StyledItemText = styled.Text<{ isActive?: boolean }>`
  ${Typography16SemiBold};
  color: ${({ isActive }) =>
    isActive ? styledConstants.colors.violet4 : styledConstants.colors.grey1};
`;
