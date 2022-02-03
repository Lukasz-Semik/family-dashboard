import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { WebStoreRootState } from '../store';

const selectFamily = (state: WebStoreRootState) => {
  return state.family;
};

export const webStoreSelectFamily = createSelector(
  selectFamily,
  (family) => family
);

export const useSelectFamily = (): WebStoreRootState['family'] =>
  useSelector(webStoreSelectFamily);
