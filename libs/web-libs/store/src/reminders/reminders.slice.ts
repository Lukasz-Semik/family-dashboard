import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APIGetRemindersResponse } from '@family-dashboard/fe-libs/api-graphql';

import { WSReminder, WSRmindersState } from './reminders.types';

const initialState: WSRmindersState = {
  data: [],
  nextToken: null,
};

export const webRemindersStore = createSlice({
  name: 'reminders',
  initialState,
  reducers: {
    setReminders: (
      reminders,
      action: PayloadAction<APIGetRemindersResponse['getReminders']>
    ) => {
      reminders.data = action.payload.reminders;
      reminders.nextToken = action.payload.nextToken;
    },
    setRemindersData: (reminders, action: PayloadAction<WSReminder[]>) => {
      reminders.data = action.payload;
    },
  },
});

export const webStoreRemindersActions = webRemindersStore.actions;
export const webStoreRemindersReducer = webRemindersStore.reducer;
