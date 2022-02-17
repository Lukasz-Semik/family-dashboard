import React, { useMemo, useState } from 'react';
import { View } from 'react-native';

import {
  IconBell,
  IconCalendar,
  IconNotepad,
  IconShop,
} from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';
import { MobileRoute } from '@family-dashboard/global/const';
import { copies } from '@family-dashboard/global/copies';

import { DashboardControl } from './DashboardControl';

export function DashboardControls() {
  const [tileWidth, setTileWidth] = useState(0);
  const [rowWidth, setRowWidth] = useState(0);

  const bottomMargin = useMemo(() => {
    return rowWidth - 2 * tileWidth;
  }, [rowWidth, tileWidth]);

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
        <DashboardControl
          text={copies.reminders.title}
          route={MobileRoute.Reminders}
          tileHeight={tileWidth}
          onLayout={(e) => {
            setTileWidth(e.nativeEvent.layout.width);
          }}
          icon={
            <IconBell
              width={32}
              height={32}
              color={styledConstants.colors.orange4}
            />
          }
        />

        <DashboardControl
          text={copies.calendar.title}
          route={MobileRoute.Calendar}
          tileHeight={tileWidth}
          icon={
            <IconCalendar
              width={32}
              height={32}
              color={styledConstants.colors.orange4}
            />
          }
        />
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}
      >
        <DashboardControl
          text={copies.shop.title}
          route={MobileRoute.Shop}
          tileHeight={tileWidth}
          icon={
            <IconShop
              width={32}
              height={32}
              color={styledConstants.colors.orange4}
            />
          }
        />

        <DashboardControl
          text={copies.todos.title}
          route={MobileRoute.Todos}
          tileHeight={tileWidth}
          icon={
            <IconNotepad
              width={32}
              height={32}
              color={styledConstants.colors.orange4}
            />
          }
        />
      </View>
    </View>
  );
}
