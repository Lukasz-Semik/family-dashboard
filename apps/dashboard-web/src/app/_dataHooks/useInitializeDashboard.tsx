import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import { GetUserInitialAppState } from '@family-dashboard/fe-libs/api-graphql';
import { CTInitialAppStateResponse } from '@family-dashboard/global/types';
import {
  webStoreFamilyActions,
  webStoreUserActions,
} from '@family-dashboard/web-libs/store';

export function useInitializeDashboard() {
  const dispatch = useDispatch();

  const { loading } = useQuery<{
    getUserInitialAppState: CTInitialAppStateResponse;
  }>(GetUserInitialAppState, {
    onCompleted: (responseData) => {
      dispatch(
        webStoreUserActions.setUserData(
          responseData.getUserInitialAppState.currentUser
        )
      );

      dispatch(
        webStoreFamilyActions.setFamilyData(
          responseData.getUserInitialAppState.family
        )
      );
    },
  });

  return {
    isLoading: loading,
  };
}
