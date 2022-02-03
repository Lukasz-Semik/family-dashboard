import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  CTFamilyBaseData,
  CTInvitationDisplayData,
  CTUserBaseData,
} from '@family-dashboard/global/types';

export interface FamilyState {
  data: CTFamilyBaseData;
  invitations: CTInvitationDisplayData[];
  users: CTUserBaseData[];
}

type SetFamilyMembersActionPaylod = Pick<FamilyState, 'invitations' | 'users'>;
type SetInvitationsActionPayload = CTInvitationDisplayData[];

const initialState: FamilyState = {
  data: {
    name: '',
    id: '',
  },
  invitations: [],
  users: [],
};

export const webStoreFamily = createSlice({
  name: 'family',
  initialState,
  reducers: {
    setFamilyData: (family, action: PayloadAction<CTFamilyBaseData>) => {
      family.data = action.payload;
    },
    setFamilyMembers: (
      family,
      action: PayloadAction<SetFamilyMembersActionPaylod>
    ) => {
      family.invitations = action.payload.invitations;
      family.users = action.payload.users;
    },
    setInvitations: (
      family,
      action: PayloadAction<SetInvitationsActionPayload>
    ) => {
      family.invitations = action.payload;
    },
  },
});

export const webStoreFamilyActions = webStoreFamily.actions;
export const webStoreFamilyReducer = webStoreFamily.reducer;