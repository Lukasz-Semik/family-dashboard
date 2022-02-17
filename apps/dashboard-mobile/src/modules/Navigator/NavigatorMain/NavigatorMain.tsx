import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import {
  MobileRoute,
  MobileStackParamList,
} from '@family-dashboard/global/const';
import { copies } from '@family-dashboard/global/copies';

import { Account } from '../../Account/Account';
import { SignIn } from '../../Auth/SignIn/SignIn';
import { Calendar } from '../../Calendar/Calendar';
import { Dashboard } from '../../Dashboard/Dashboard';
import { Family } from '../../Family/Family';
import { Notifications } from '../../Notifications/Notifications';
import { Reminders } from '../../Reminders/Reminders';
import { Shop } from '../../Shop/Shop';
import { Todos } from '../../Todos/Todos';
import { NavigatorLeftControls } from '../NavigatorLeftControls/NavigatorLeftControls';
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

      <Stack.Screen
        name={MobileRoute.Dashboard}
        component={Dashboard}
        options={{ title: copies.dashboard.title }}
      />

      <Stack.Screen
        name={MobileRoute.Reminders}
        component={Reminders}
        options={{ title: copies.reminders.title }}
      />

      <Stack.Screen
        name={MobileRoute.Notifications}
        component={Notifications}
        options={{ title: copies.notifications.title }}
      />

      <Stack.Screen
        name={MobileRoute.Calendar}
        component={Calendar}
        options={{ title: copies.calendar.title }}
      />

      <Stack.Screen
        name={MobileRoute.Shop}
        component={Shop}
        options={{ title: copies.shop.title }}
      />

      <Stack.Screen
        name={MobileRoute.Todos}
        component={Todos}
        options={{ title: copies.todos.title }}
      />

      <Stack.Screen
        name={MobileRoute.Family}
        component={Family}
        options={{ title: copies.family.title }}
      />

      <Stack.Screen
        name={MobileRoute.Account}
        component={Account}
        options={{ title: copies.account.title }}
      />
    </Stack.Navigator>
  );
}
