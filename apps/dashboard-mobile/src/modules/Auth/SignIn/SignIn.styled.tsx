import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/global/styled-constants';

export const StyledHeader = styled.Text`
  font-size: 32px;
  font-weight: ${styledConstants.fontWeight.black};
  color: ${styledConstants.colors.violet4};
  font-family: ${styledConstants.fontFamily.main};
  margin-bottom: 64px;
`;

export const StyledSubHeader = styled.Text`
  font-weight: ${styledConstants.fontWeight.black};
  color: ${styledConstants.colors.orange4};
  font-family: ${styledConstants.fontFamily.main};
  font-size: 32px;
  margin-bottom: 16px;
`;

export const StyledDescription = styled.Text`
  font-weight: ${styledConstants.fontWeight.regular};
  color: ${styledConstants.colors.violet3};
  font-family: ${styledConstants.fontFamily.main};
  font-size: 16px;
  margin-bottom: 32px;
`;
