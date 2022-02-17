import React from 'react';
import { Pressable } from 'react-native';
import {
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';

import {
  IconBackArrow,
  IconHamburger,
  useModalState,
} from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import {
  MobileRoute,
  MobileStackParamList,
} from '@family-dashboard/global/const';

import { NavigatorDrawer } from '../NavigatorDrawer/NavigatorDrawer';
import { StyledWrapper } from './NavigatorLeftControls.styled';

const routesWithBackButtonHidden = [MobileRoute.Dashboard, MobileRoute.SignIn];

export function NavigatorLeftControls() {
  const [isDrawerOpen, openDrawer, closeDrawer] = useModalState();

  const navigation =
    useNavigation<NavigationContainerRef<MobileStackParamList>>();

  const currentRoute = navigation.getCurrentRoute();

  const hasBackButtonHidden = routesWithBackButtonHidden.includes(
    currentRoute.name as MobileRoute
  );

  return (
    <>
      <NavigatorDrawer
        currentRouteName={currentRoute.name}
        closeDrawer={closeDrawer}
        isOpen={isDrawerOpen}
      />

      <StyledWrapper>
        <Pressable style={{ marginRight: 8 }} onPressIn={openDrawer}>
          <IconHamburger
            width={18}
            height={16}
            color={styledConstants.colors.orange4}
          />
        </Pressable>

        {!hasBackButtonHidden && (
          <Pressable
            onPressIn={() => navigation.navigate(MobileRoute.Dashboard)}
          >
            <IconBackArrow
              width={20}
              height={20}
              color={styledConstants.colors.violet2}
            />
          </Pressable>
        )}
      </StyledWrapper>
    </>
  );
}
