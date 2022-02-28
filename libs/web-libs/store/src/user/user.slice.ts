import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ApiMemberDisplay } from '@family-dashboard/fe-libs/api-graphql';

import { memberDisplayInitialValues } from '../store.utils';

export interface UserState {
  data: ApiMemberDisplay;
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
    setUserData: (user, action: PayloadAction<ApiMemberDisplay>) => {
      user.data = action.payload;
    },
  },
});

export const webStoreUserActions = webStoreUser.actions;
export const webStoreUserReducer = webStoreUser.reducer;
