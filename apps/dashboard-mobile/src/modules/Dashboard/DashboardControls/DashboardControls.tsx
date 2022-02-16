import { IconBell, LayoutCard } from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import React, { useMemo, useRef, useState } from 'react';
import { View, Text } from 'react-native';

import { StyledCard, StyledText } from './DashboardControls.styled';

export function DashboardControls() {
  const [tileWidth, setTileWidth] = useState(0);
  const [rowWidth, setRowWidth] = useState(0);

  const bottomMargin = useMemo(() => {
    return rowWidth - 2 * tileWidth;
  }, [rowWidth, tileWidth]);

  const tileSize = {
    width: '48%',
    height: tileWidth,
  };

  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: bottomMargin,
        }}
        onLayout={(e) => {
          setRowWidth(e.nativeEvent.layout.width);
        }}
      >
        <View
          style={tileSize}
          onLayout={(e) => {
            setTileWidth(e.nativeEvent.layout.width);
          }}
        >
          <StyledCard>
            <View style={{ marginBottom: 12 }}>
              <IconBell
                width={32}
                height={32}
                color={styledConstants.colors.orange4}
              />
            </View>
            <StyledText>Notifications</StyledText>
          </StyledCard>
        </View>

        <View style={tileSize}>
          <StyledCard>
            <Text>x</Text>
          </StyledCard>
        </View>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <View style={tileSize}>
          <StyledCard>
            <Text>x</Text>
          </StyledCard>
        </View>

        <View style={tileSize}>
          <StyledCard>
            <Text>x</Text>
          </StyledCard>
        </View>
      </View>
    </View>
  );
}
