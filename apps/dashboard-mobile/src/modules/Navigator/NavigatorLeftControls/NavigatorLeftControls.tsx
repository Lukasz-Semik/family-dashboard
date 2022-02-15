import React from 'react';
import { Pressable } from 'react-native';
import {
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';

import {
  IconBackArrow,
  IconHamburger,
} from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import {
  MobileRoute,
  MobileStackParamList,
} from '@family-dashboard/global/const';

import { StyledWrapper } from './NavigatorLeftControls.styled';

const routesWithBackButton = [MobileRoute.Menu];
const routesWithMenuHidden = [MobileRoute.Menu];

export function NavigatorLeftControls() {
  const navigation =
    useNavigation<NavigationContainerRef<MobileStackParamList>>();

  const currentRoute = navigation.getCurrentRoute();

  const hasBackButton = routesWithBackButton.includes(
    currentRoute.name as MobileRoute
  );
  const shouldHideMenu = routesWithMenuHidden.includes(
    currentRoute.name as MobileRoute
  );

  return (
    <StyledWrapper>
      {!shouldHideMenu && (
        <Pressable
          style={{ marginRight: 8 }}
          onPressIn={() => navigation.navigate(MobileRoute.Menu)}
        >
          <IconHamburger
            width={18}
            height={16}
            color={styledConstants.colors.orange4}
          />
        </Pressable>
      )}

      {navigation.canGoBack && hasBackButton && (
        <Pressable onPressIn={() => navigation.goBack()}>
          <IconBackArrow
            width={20}
            height={20}
            color={styledConstants.colors.violet2}
          />
        </Pressable>
      )}
    </StyledWrapper>
  );
}
