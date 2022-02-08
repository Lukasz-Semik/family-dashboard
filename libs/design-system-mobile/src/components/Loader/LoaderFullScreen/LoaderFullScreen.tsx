import React from 'react';
import { View } from 'react-native';

import { copies } from '@family-dashboard/global/copies';

import { ModalStandard } from '../../Modal/ModalStandard/ModalStandard';
import { LoaderStandard } from '../LoaderStandard/LoaderStandard';
import { StyledText, StyledWrapper } from './LoaderFullScreen.styled';

interface Props {
  isVisible?: boolean;
  text?: string;
  overlayOpacity?: number;
}

const DEFAULT_TEXT = `${copies.shared.loading}...`;

export function LoaderFullScreen({
  isVisible,
  text = DEFAULT_TEXT,
  overlayOpacity,
}: Props) {
  return (
    <ModalStandard
      isVisible={Boolean(isVisible)}
      backdropOpacity={overlayOpacity}
    >
      <StyledWrapper>
        <View style={{ marginBottom: 16 }}>
          <LoaderStandard size={64} />
        </View>
        <StyledText>{text}</StyledText>
      </StyledWrapper>
    </ModalStandard>
  );
}
