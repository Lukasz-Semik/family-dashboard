import React from 'react';
import { Pressable, View } from 'react-native';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import { IconPlusCircle } from '../../../icons/Icons';
import { ButtonProps } from '../Button.types';
import { StyledText } from './ButtonCreate.styled';

interface Props extends Omit<ButtonProps, 'children'> {
  text: string;
}

export function ButtonCreate({ isDisabled, text, ...restProps }: Props) {
  return (
    <Pressable disabled={isDisabled} {...restProps}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <View style={{ marginRight: 8 }}>
          <IconPlusCircle
            width={16}
            height={16}
            color={styledConstants.colors.blue1}
          />
        </View>
        <StyledText>{text}</StyledText>
      </View>
    </Pressable>
  );
}
