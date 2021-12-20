import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CTFamilyBaseData } from '@family-dashboard/global/types';

export interface FamilyState {
  data: CTFamilyBaseData;
}

const initialState: FamilyState = {
  data: {
    name: '',
    id: '',
  },
};

export const fdStoreFamily = createSlice({
  name: 'family',
  initialState,
  reducers: {
    setFamilyData: (family, action: PayloadAction<CTFamilyBaseData>) => {
      family.data = action.payload;
    },
  },
});

export const fdStoreFamilyActions = fdStoreFamily.actions;
export const fdStoreFamilyReducer = fdStoreFamily.reducer;
