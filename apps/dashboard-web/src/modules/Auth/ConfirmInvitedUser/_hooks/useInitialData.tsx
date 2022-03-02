import { useRouteMatch } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GetUserInvitation } from '@family-dashboard/fe-libs/api-graphql';
import { GTInvitationDisplay } from '@family-dashboard/global/types';

export function useInitialData() {
  const match = useRouteMatch<{ token: string }>();

  const { data, loading, error } = useQuery<
    { getUserInvitation: GTInvitationDisplay },
    { token: string }
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
