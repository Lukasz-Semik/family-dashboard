import { configureStore } from '@reduxjs/toolkit';

import { webStoreFamilyReducer } from './family/family.slice';
import { webStoreRemindersReducer } from './reminders/reminders.slice';
import { webStoreUserReducer } from './user/user.slice';

export const webStore = configureStore({
  reducer: {
    user: webStoreUserReducer,
    family: webStoreFamilyReducer,
    reminders: webStoreRemindersReducer,
  },
});

export type WebStoreRootState = ReturnType<typeof webStore.getState>;

export type WebStoreAppDispatch = typeof webStore.dispatch;
