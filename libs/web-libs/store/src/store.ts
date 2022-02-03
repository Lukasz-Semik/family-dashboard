import { configureStore } from '@reduxjs/toolkit';

import { webStoreFamilyReducer } from './family/family.slice';
import { webStoreUserReducer } from './user/user.slice';

export const fdStore = configureStore({
  reducer: {
    user: webStoreUserReducer,
    family: webStoreFamilyReducer,
  },
});

export type WebStoreRootState = ReturnType<typeof fdStore.getState>;

export type FDStoreAppDispatch = typeof fdStore.dispatch;
