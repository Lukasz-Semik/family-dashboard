import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import {
  ApiWebFamilyDisplay,
  GetFamilyDisplay,
} from '@family-dashboard/fe-libs/api-graphql';
import {
  webStoreFamilyActions,
  webStoreUserActions,
} from '@family-dashboard/web-libs/store';

export function useInitializeDashboard() {
  const dispatch = useDispatch();

  const { loading } = useQuery<{ getFamilyDisplay: ApiWebFamilyDisplay }>(
    GetFamilyDisplay,
    {
      onCompleted: (responseData) => {
        dispatch(
          webStoreUserActions.setUserData(
            responseData.getFamilyDisplay.currentUser
          )
        );

        dispatch(
          webStoreFamilyActions.setFamilyData(responseData.getFamilyDisplay)
        );
      },
    }
  );

  return {
    isLoading: loading,
  };
}
