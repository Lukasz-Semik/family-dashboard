import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

import { styledConstants } from '@family-dashboard/global/styled-constants';

const StyledText = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: ${styledConstants.colors.violet4};
  font-family: 'Montserrat';
  margin-bottom: 40px;
`;

const StyledRow = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

const StyledText2 = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: ${styledConstants.colors.orange4};
  font-family: 'Montserrat';
`;

const StyledText3 = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${styledConstants.colors.violet2};
  font-family: 'Montserrat';
`;

const StyledView = styled.View`
  padding: 16px;
  background-color: ${styledConstants.colors.orange1};
  height: 100%;
`;

export function App() {
  return (
    <SafeAreaView>
      <StyledView>
        <StyledText>Family Dashboard</StyledText>
        <StyledRow>
          <StyledText2>Sign Up</StyledText2>
          <StyledText3>Sign in</StyledText3>
        </StyledRow>
      </StyledView>
    </SafeAreaView>
  );
}
