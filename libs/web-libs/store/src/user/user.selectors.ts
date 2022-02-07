import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { WebStoreRootState } from '../store';

const selectUser = (state: WebStoreRootState) => {
  return state.user;
};

export const webStoreSelectUser = createSelector(selectUser, (user) => user);

export const useSelectUser = (): WebStoreRootState['user'] =>
  useSelector(webStoreSelectUser);
