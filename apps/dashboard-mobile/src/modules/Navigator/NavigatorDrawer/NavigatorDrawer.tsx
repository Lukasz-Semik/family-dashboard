import React, { useCallback, useRef, useState } from 'react';
import { Pressable, View } from 'react-native';
import Modal from 'react-native-modal';
import {
  NavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';

import {
  IconBell,
  IconClock,
  IconCrossmark,
  IconDashboard,
  IconFamily,
  IconNotepad,
  IconShop,
  IconUser,
} from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import {
  MobileRoute,
  MobileStackParamList,
} from '@family-dashboard/global/const';
import { copies } from '@family-dashboard/global/copies';

import {
  StyledCloseWrapper,
  StyledHeaderWrapper,
  StyledTitle,
  StyledWrapper,
} from './NavigatorDrawer.styled';
import { NavigatorDrawerItem } from './NavigatorDrawerItem';

interface Props {
  isOpen: boolean;
  closeDrawer: () => void;
  currentRouteName: string;
}

export function NavigatorDrawer({
  isOpen,
  closeDrawer,
  currentRouteName,
}: Props) {
  const [nextRoute, setNextRoute] = useState<MobileRoute>();
  const navigation =
    useNavigation<NavigationContainerRef<MobileStackParamList>>();
  const shouldAnimateClose = useRef(false);

  const onItemPress = useCallback(
    (route: MobileRoute | undefined) => {
      shouldAnimateClose.current = !route;
      setNextRoute(route);
      closeDrawer();
    },
    [closeDrawer]
  );

  return (
    <Modal
      isVisible={isOpen}
      backdropOpacity={1}
      animationIn="slideInLeft"
      animationOut={shouldAnimateClose.current ? 'slideOutLeft' : 'fadeOut'}
      animationInTiming={300}
      animationOutTiming={shouldAnimateClose.current ? 300 : 100}
      backdropColor={styledConstants.colors.white}
      onModalHide={() => {
        if (nextRoute) {
          navigation.navigate(nextRoute);
        }
      }}
    >
      <StyledWrapper>
        <View style={{ marginBottom: 30 }}>
          <StyledHeaderWrapper>
            <StyledTitle>{copies.shared.menu}</StyledTitle>
            <Pressable
              onPress={() => {
                onItemPress(undefined);
              }}
            >
              <StyledCloseWrapper>
                <IconCrossmark
                  width={15}
                  height={15}
                  color={styledConstants.colors.grey1}
                />
              </StyledCloseWrapper>
            </Pressable>
          </StyledHeaderWrapper>

          <NavigatorDrawerItem
            text={copies.dashboard.title}
            onPress={onItemPress}
            routeName={MobileRoute.Dashboard}
            currentRouteName={currentRouteName}
            renderIcon={({ color }) => (
              <IconDashboard width={18} height={18} color={color} />
            )}
          />

          <NavigatorDrawerItem
            text={copies.reminders.title}
            onPress={onItemPress}
            routeName={MobileRoute.Reminders}
            currentRouteName={currentRouteName}
            renderIcon={({ color }) => (
              <IconClock width={18} height={18} color={color} />
            )}
          />

          <NavigatorDrawerItem
            text={copies.notifications.title}
            onPress={onItemPress}
            routeName={MobileRoute.Notifications}
            currentRouteName={currentRouteName}
            renderIcon={({ color }) => (
              <IconBell width={18} height={18} color={color} />
            )}
          />

          <NavigatorDrawerItem
            text={copies.shop.title}
            onPress={onItemPress}
            routeName={MobileRoute.Shop}
            currentRouteName={currentRouteName}
            renderIcon={({ color }) => (
              <IconShop width={18} height={18} color={color} />
            )}
          />

          <NavigatorDrawerItem
            text={copies.todos.title}
            onPress={onItemPress}
            routeName={MobileRoute.Todos}
            currentRouteName={currentRouteName}
            renderIcon={({ color }) => (
              <IconNotepad width={18} height={18} color={color} />
            )}
          />

          <NavigatorDrawerItem
            text={copies.family.title}
            onPress={onItemPress}
            routeName={MobileRoute.Family}
            currentRouteName={currentRouteName}
            renderIcon={({ color }) => (
              <IconFamily width={18} height={18} color={color} />
            )}
          />

          <NavigatorDrawerItem
            text={copies.account.title}
            onPress={onItemPress}
            routeName={MobileRoute.Account}
            currentRouteName={currentRouteName}
            renderIcon={({ color }) => (
              <IconUser width={18} height={18} color={color} />
            )}
          />
        </View>
      </StyledWrapper>
    </Modal>
  );
}
