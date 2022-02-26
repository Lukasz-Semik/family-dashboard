import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApiWebMemberDisplay } from '@family-dashboard/fe-libs/api-graphql';

import { memberDisplayInitialValues } from '../store.utils';

export interface UserState {
  data: ApiWebMemberDisplay;
}

const initialState: UserState = {
  data: {
    ...memberDisplayInitialValues,
  },
};

export const webStoreUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (user, action: PayloadAction<ApiWebMemberDisplay>) => {
      user.data = action.payload;
    },
  },
});

export const webStoreUserActions = webStoreUser.actions;
export const webStoreUserReducer = webStoreUser.reducer;
