import React from 'react';
import { Grid } from 'react-native-animated-spinkit';

import { styledConstants } from '@family-dashboard/fe-libs/styled-constants';

import { LoaderProps } from '../Loader.types';

export function LoaderStandard({
  size = 32,
  color = styledConstants.colors.violet2,
}: LoaderProps) {
  return <Grid size={size} color={color} />;
}
