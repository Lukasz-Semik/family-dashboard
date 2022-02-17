import React from 'react';
import { Pressable, View } from 'react-native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import { MobileRoute } from '@family-dashboard/global/const';

import { StyledItemText, StyledItemWrapper } from './NavigatorDrawer.styled';

interface RenderIconProps {
  color: string;
}

interface Props {
  onPress: (route: MobileRoute) => void;
  routeName: MobileRoute;
  renderIcon: (renderProps: RenderIconProps) => React.ReactNode;
  text: string;
  currentRouteName: string;
}

export function NavigatorDrawerItem({
  onPress,
  routeName,
  text,
  renderIcon,
  currentRouteName,
}: Props) {
  const isActive = routeName === currentRouteName;
  return (
    <Pressable
      onPressIn={() => {
        onPress(routeName);
      }}
    >
      <StyledItemWrapper>
        <View style={{ marginRight: 16 }}>
          {renderIcon({
            color: isActive
              ? styledConstants.colors.violet4
              : styledConstants.colors.grey1,
          })}
        </View>
        <StyledItemText isActive={isActive}>{text}</StyledItemText>
      </StyledItemWrapper>
    </Pressable>
  );
}
