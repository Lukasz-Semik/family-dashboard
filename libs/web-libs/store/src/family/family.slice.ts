import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { omit } from 'lodash';

import { ApiWebFamilyDisplay } from '@family-dashboard/fe-libs/api-graphql';

export interface FamilyState {
  data: Omit<ApiWebFamilyDisplay, 'currentUser'>;
}

const initialState: FamilyState = {
  data: {
    familyId: '',
    fullKey: '',
    familyDetails: {
      name: '',
    },
    members: [],
    invitations: [],
  },
};

export const webStoreFamily = createSlice({
  name: 'family',
  initialState,
  reducers: {
    setFamilyData: (family, action: PayloadAction<ApiWebFamilyDisplay>) => {
      family.data = omit(action.payload, ['currentUser']);
    },
  },
});

export const webStoreFamilyActions = webStoreFamily.actions;
export const webStoreFamilyReducer = webStoreFamily.reducer;
