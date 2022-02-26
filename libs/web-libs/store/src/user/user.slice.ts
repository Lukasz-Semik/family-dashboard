import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  CTGender,
  CTMemberType,
  CTUserBaseData,
} from '@family-dashboard/global/types';

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
    modulePermissions: [],
    memberType: '' as CTMemberType,
  },
};

export const webStoreUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (user, action: PayloadAction<CTUserBaseData>) => {
      user.data = action.payload;
    },
  },
});

export const webStoreUserActions = webStoreUser.actions;
export const webStoreUserReducer = webStoreUser.reducer;
