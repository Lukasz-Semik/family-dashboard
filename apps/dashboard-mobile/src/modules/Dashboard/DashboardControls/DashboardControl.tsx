import React from 'react';
import { LayoutChangeEvent, Pressable } from 'react-native';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  MobileRoute,
  MobileStackParamList,
} from '@family-dashboard/global/const';

import { StyledCard, StyledText } from './DashboardControls.styled';

interface Props {
  onLayout?: (event: LayoutChangeEvent) => void;
  tileHeight: number;
  icon: React.ReactNode;
  text: string;
  route: MobileRoute;
}

export function DashboardControl({
  onLayout,
  tileHeight,
  icon,
  text,
  route,
}: Props) {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<MobileStackParamList, typeof route>
    >();

  const onPress = () => navigation.push(route);

  return (
    <View style={{ width: '48%', height: tileHeight }} onLayout={onLayout}>
      <Pressable onPress={onPress}>
        <StyledCard>
          <View style={{ marginBottom: 12 }}>{icon}</View>
          <StyledText>{text}</StyledText>
        </StyledCard>
      </Pressable>
    </View>
  );
}
