import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';

import { mobileDashboardGraphql } from '@family-dashboard/fe-libs/api-graphql';

import { NavigatorMain } from '../modules/Navigator/NavigatorMain/NavigatorMain';

export function App() {
  return (
    <ApolloProvider client={mobileDashboardGraphql}>
      <NavigationContainer>
        <NavigatorMain />
      </NavigationContainer>
    </ApolloProvider>
  );
}
