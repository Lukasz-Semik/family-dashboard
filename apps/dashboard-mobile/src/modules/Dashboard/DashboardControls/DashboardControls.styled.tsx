import { Typography16Black } from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import styled from 'styled-components/native';

export const StyledCard = styled.View`
  background-color: ${styledConstants.colors.white};
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled.Text`
  color: ${styledConstants.colors.orange4};
  ${Typography16Black};
`;
