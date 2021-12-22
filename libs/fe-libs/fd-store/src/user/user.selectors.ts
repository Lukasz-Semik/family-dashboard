import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { FDStoreRootState } from '../store';

const selectUser = (state: FDStoreRootState) => {
  return state.user;
};

export const fdStoreSelectUser = createSelector(selectUser, (user) => user);

export const useSelectUser = (): FDStoreRootState['user'] =>
  useSelector(fdStoreSelectUser);
