import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HeaderBackButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types';

import {
  IconBackArrow,
  IconHamburger,
} from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import { MobileStackParamList } from '@family-dashboard/global/const';

import { StyledWrapper } from './NavigationLeftControls.styled';

export function NavigatorLeftControls({ canGoBack }: HeaderBackButtonProps) {
  const navigation =
    useNavigation<NativeStackNavigationProp<MobileStackParamList, 'SignIn'>>();

  console.log(navigation);

  return (
    <StyledWrapper>
      <Pressable style={{ marginRight: 8 }}>
        <IconHamburger
          width={18}
          height={16}
          color={styledConstants.colors.orange4}
        />
      </Pressable>

      {canGoBack && (
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
