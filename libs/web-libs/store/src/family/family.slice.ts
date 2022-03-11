import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { omit } from 'lodash';

import { APIGetFamilyDisplay } from '@family-dashboard/fe-libs/api-graphql';

import { WSFamilyState } from './family.types';

const initialState: WSFamilyState = {
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
    setFamilyData: (family, action: PayloadAction<APIGetFamilyDisplay>) => {
      family.data = omit(action.payload, ['currentUser']);
    },
    setFamilyDataInvitations: (
      family,
      action: PayloadAction<APIGetFamilyDisplay['invitations']>
    ) => {
      family.data.invitations = action.payload;
    },
  },
});

export const webStoreFamilyActions = webStoreFamily.actions;
export const webStoreFamilyReducer = webStoreFamily.reducer;
