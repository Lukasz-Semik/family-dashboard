import { useRouteMatch } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { GetUserInvitation } from '@family-dashboard/fe-libs/api-graphql';
import { CTInvitationUserPersonalDetailsData } from '@family-dashboard/global/types';

export function useInitialData() {
  const match = useRouteMatch<{ token: string }>();

  const { data, loading, error } = useQuery<
    { getUserInvitation: CTInvitationUserPersonalDetailsData },
    { token: string }
  >(GetUserInvitation, {
    variables: {
      token: match.params.token,
    },
  });

  console.log(error);
  return {
    initialData: data?.getUserInvitation,
    isLoading: loading,
    isFailed: Boolean(error),
  };
}
