import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { FDStoreRootState } from '../store';

const selectFamily = (state: FDStoreRootState) => {
  return state.family;
};

export const fdStoreSelectFamilyData = createSelector(
  selectFamily,
  (family) => family.data
);

export const useSelectFamilyData = (): FDStoreRootState['family']['data'] =>
  useSelector(fdStoreSelectFamilyData);
