import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import {
  MobileRoute,
  MobileStackParamList,
} from '@family-dashboard/global/const';
import { copies } from '@family-dashboard/global/copies';

import { SignIn } from '../../Auth/SignIn/SignIn';
import { Dashboard } from '../../Dashboard/Dashboard';
import { Shop } from '../../Shop/Shop';
import { NavigatorLeftControls } from '../NavigatorLeftControls/NavigatorLeftControls';
import { NavigatorMenu } from '../NavigatorMenu/NavigatorMenu';
import { NavigatorRightControls } from '../NavigatorRightControls/NavigatorRightControls';
import { NavigatorTitle } from '../NavigatorTitle/NavigatorTitle';

const Stack = createNativeStackNavigator<MobileStackParamList>();

export function NavigatorMain() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackButtonMenuEnabled: false,
        headerStyle: {
          backgroundColor: styledConstants.colors.white,
        },
        headerLeft: () => <NavigatorLeftControls />,
        headerTitle: (headerTitleProps) => (
          <NavigatorTitle {...headerTitleProps} />
        ),
        headerRight: () => <NavigatorRightControls />,
      }}
    >
      <Stack.Screen
        name={MobileRoute.SignIn}
        component={SignIn}
        options={{
          headerLeft: null,
          headerRight: null,
          title: copies.auth.signIn.title,
        }}
      />

      <Stack.Screen name={MobileRoute.Menu} component={NavigatorMenu} />

      <Stack.Screen
        name={MobileRoute.Dashboard}
        component={Dashboard}
        options={{ title: copies.dashboard.title }}
      />

      <Stack.Screen
        name={MobileRoute.Shop}
        component={Shop}
        options={{ title: 'shop' }}
      />
    </Stack.Navigator>
  );
}
