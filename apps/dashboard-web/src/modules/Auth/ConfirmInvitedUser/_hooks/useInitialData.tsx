import { useRouteMatch } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import {
  APIGetUserInvitationResponse,
  APIGetUserInvitationVariables,
  GetUserInvitation,
} from '@family-dashboard/fe-libs/api-graphql';

export function useInitialData() {
  const match = useRouteMatch<{ token: string }>();

  const { data, loading, error } = useQuery<
    APIGetUserInvitationResponse,
    APIGetUserInvitationVariables
  >(GetUserInvitation, {
    variables: {
      token: match.params.token,
    },
  });

  return {
    initialData: data?.getUserInvitation,
    isLoading: loading,
    isFailed: Boolean(error),
  };
}
