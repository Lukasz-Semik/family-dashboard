import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { APIGetFamilyDisplayMember } from '@family-dashboard/fe-libs/api-graphql';

import { memberDisplayInitialValues } from '../store.utils';
import { WSUserState } from './user.types';

const initialState: WSUserState = {
  data: {
    ...memberDisplayInitialValues,
  },
};

export const webStoreUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (user, action: PayloadAction<APIGetFamilyDisplayMember>) => {
      user.data = action.payload;
    },
  },
});

export const webStoreUserActions = webStoreUser.actions;
export const webStoreUserReducer = webStoreUser.reducer;
