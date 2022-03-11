import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import {
  APIGetFamilyDisplayResponse,
  GetFamilyDisplay,
} from '@family-dashboard/fe-libs/api-graphql';
import {
  webStoreFamilyActions,
  webStoreUserActions,
} from '@family-dashboard/web-libs/store';

export function useInitializeDashboard() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useQuery<APIGetFamilyDisplayResponse>(GetFamilyDisplay, {
    onCompleted: (responseData) => {
      dispatch(
        webStoreUserActions.setUserData(
          responseData.getFamilyDisplay.currentUser
        )
      );

      dispatch(
        webStoreFamilyActions.setFamilyData(responseData.getFamilyDisplay)
      );

      setIsLoading(false);
    },
  });

  return {
    isLoading,
  };
}
