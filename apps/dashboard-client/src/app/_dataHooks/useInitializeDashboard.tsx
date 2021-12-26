import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import { GetUserInitialAppState } from '@family-dashboard/fe-libs/api-graphql';
import {
  fdStoreFamilyActions,
  fdStoreUserActions,
} from '@family-dashboard/fe-libs/fd-store';
import { CTInitialAppStateResponse } from '@family-dashboard/global/types';

export function useInitializeDashboard() {
  const dispatch = useDispatch();

  const { loading } = useQuery<{
    getUserInitialAppState: CTInitialAppStateResponse;
  }>(GetUserInitialAppState, {
    onCompleted: (responseData) => {
      dispatch(
        fdStoreUserActions.setUserData(
          responseData.getUserInitialAppState.currentUser
        )
      );

      dispatch(
        fdStoreFamilyActions.setFamilyData(
          responseData.getUserInitialAppState.family
        )
      );
    },
  });

  return {
    isLoading: loading,
  };
}
