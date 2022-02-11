import React from 'react';
import { Text } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { mobileDashboardGraphql } from '@family-dashboard/fe-libs/api-graphql';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import { MobileStackParamList } from '@family-dashboard/global/const';
import { copies } from '@family-dashboard/global/copies';

import { SignIn } from '../modules/Auth/SignIn/SignIn';
import { Dashboard } from '../modules/Dashboard/Dashboard';
import { NavigatorTitle } from '../modules/Navigator/NavigatorTitle/NavigatorTitle';
import { NavigatorLeftControls } from '../modules/Navigator/NavigatorLeftControls/NavigatorLeftControls';

const Stack = createNativeStackNavigator<MobileStackParamList>();

export function App() {
  return (
    <ApolloProvider client={mobileDashboardGraphql}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerBackButtonMenuEnabled: false,
            headerStyle: {
              backgroundColor: styledConstants.colors.white,
            },
            headerLeft: (headerLeftProps) => (
              <NavigatorLeftControls {...headerLeftProps} />
            ),
            headerTitle: (headerTitleProps) => (
              <NavigatorTitle {...headerTitleProps} />
            ),
            headerRight: () => <Text>Right</Text>,
          }}
        >
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              // headerLeft: null,
              // headerRight: null,
              title: copies.auth.signIn.title,
            }}
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
