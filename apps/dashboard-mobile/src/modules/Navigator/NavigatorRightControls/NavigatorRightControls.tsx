import React from 'react';
import { Pressable } from 'react-native';

import { IconMessage } from '@family-dashboard/design-system-mobile';
import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

export function NavigatorRightControls() {
  return (
    <Pressable>
      <IconMessage
        width={20}
        height={20}
        color={styledConstants.colors.violet2}
      />
    </Pressable>
  );
}
