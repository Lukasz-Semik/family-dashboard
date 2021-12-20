import { configureStore } from '@reduxjs/toolkit';

import { fdStoreFamilyReducer } from './family/family.slice';
import { fdStoreUserReducer } from './user/user.slice';

export const fdStore = configureStore({
  reducer: {
    user: fdStoreUserReducer,
    family: fdStoreFamilyReducer,
  },
});

export type FDStoreRootState = ReturnType<typeof fdStore.getState>;

export type FDStoreAppDispatch = typeof fdStore.dispatch;
