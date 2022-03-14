import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';

import {
  APIVerifySignUpEmailResponse,
  APIVerifySignUpEmailVariables,
  VerifySignUpEmail,
} from '@family-dashboard/fe-libs/api-graphql';
import { GTVerifyEmailStatus } from '@family-dashboard/global/types';

interface Args {
  goToNextStep: () => void;
  goToErrorStep: () => void;
}

export function useVerifyEmail({ goToNextStep, goToErrorStep }: Args) {
  const [queryVerifyEmail, { data, loading }] = useLazyQuery<
    APIVerifySignUpEmailResponse,
    APIVerifySignUpEmailVariables
  >(VerifySignUpEmail, {
    onCompleted: (data) => {
      if (data?.verifySignUpEmail.status === GTVerifyEmailStatus.Success) {
        goToNextStep();
      } else {
        goToErrorStep();
      }
    },

    onError: () => goToErrorStep(),
  });

  const verifyEmail = useCallback(
    (email: string) => {
      queryVerifyEmail({ variables: { email } });
    },
    [queryVerifyEmail]
  );

  return {
    verifyEmail,
    verifyEmailResponse: data?.verifySignUpEmail,
    isLoadingVerifyEmail: loading,
  };
}
