import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

import { WebStoreRootState } from '../store';

const selectReminders = (state: WebStoreRootState) => {
  return state.reminders;
};

export const webStoreSelectReminders = createSelector(
  selectReminders,
  (family) => family
);

export const useSeclectReminders = (): WebStoreRootState['reminders'] =>
  useSelector(webStoreSelectReminders);
