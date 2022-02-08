import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import { Typography16Black } from '../../../utils/typography';

export const StyledWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  ${Typography16Black};
  color: ${styledConstants.colors.white};
`;
