import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { FDStoreRootState } from '../store';

const selectUser = (state: FDStoreRootState) => {
  return state.user;
};

export const fdStoreSelectUserData = createSelector(
  selectUser,
  (user) => user.data
);

export const useSelectUserData = (): FDStoreRootState['user']['data'] =>
  useSelector(fdStoreSelectUserData);
