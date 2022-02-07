import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { mobileDashboardGraphql } from '@family-dashboard/fe-libs/api-graphql';
import { MobileStackParamList } from '@family-dashboard/global/const';
import { copies } from '@family-dashboard/global/copies';

import { SignIn } from '../modules/Auth/SignIn/SignIn';
import { Dashboard } from '../modules/Dashboard/Dashboard';

const Stack = createNativeStackNavigator<MobileStackParamList>();

export function App() {
  return (
    <ApolloProvider client={mobileDashboardGraphql}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ title: copies.auth.signIn.title }}
          />
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ title: copies.dashboard.title }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
