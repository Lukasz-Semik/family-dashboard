import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';

import {
  APIGetRemindersResponse,
  APIGetRemindersVariables,
  GetReminders,
} from '@family-dashboard/fe-libs/api-graphql';
import { webStoreRemindersActions } from '@family-dashboard/web-libs/store';

export function useGetReminders() {
  const dispatch = useDispatch();

  const { loading } = useQuery<
    APIGetRemindersResponse,
    APIGetRemindersVariables
  >(GetReminders, {
    variables: {
      limit: 10,
    },
    onCompleted: (response) => {
      dispatch(webStoreRemindersActions.setReminders(response.getReminders));
    },
  });

  return {
    isLoading: loading,
  };
}
