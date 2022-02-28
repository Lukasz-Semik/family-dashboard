import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { omit } from 'lodash';

import { ApiFamilyDisplay } from '@family-dashboard/fe-libs/api-graphql';

export interface FamilyState {
  data: Omit<ApiFamilyDisplay, 'currentUser'>;
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
    setFamilyData: (family, action: PayloadAction<ApiFamilyDisplay>) => {
      family.data = omit(action.payload, ['currentUser']);
    },
    setFamilyDataInvitations: (
      family,
      action: PayloadAction<ApiFamilyDisplay['invitations']>
    ) => {
      family.data.invitations = action.payload;
    },
  },
});

export const webStoreFamilyActions = webStoreFamily.actions;
export const webStoreFamilyReducer = webStoreFamily.reducer;
