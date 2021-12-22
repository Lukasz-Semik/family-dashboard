import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { FDStoreRootState } from '../store';

const selectFamily = (state: FDStoreRootState) => {
  return state.family;
};

export const fdStoreSelectFamily = createSelector(
  selectFamily,
  (family) => family
);

export const useSelectFamily = (): FDStoreRootState['family'] =>
  useSelector(fdStoreSelectFamily);
