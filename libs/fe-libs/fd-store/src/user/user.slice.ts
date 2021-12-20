import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CTGender, CTUserBaseData } from '@family-dashboard/global/types';

export interface UserState {
  data: CTUserBaseData;
}

const initialState: UserState = {
  data: {
    firstName: '',
    middleName: '',
    lastName: '',
    dob: '' as unknown as Date,
    gender: '' as CTGender,
    email: '',
    id: '',
  },
};

export const fdStoreUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<CTUserBaseData>) => {
      console.log({ action });
      state.data = action.payload;
    },
  },
});

export const fdStoreUserActions = fdStoreUser.actions;
export const fdStoreUserReducer = fdStoreUser.reducer;
