import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';

import { VerifySignUpEmail } from '@family-dashboard/fe-libs/api-graphql';
import {
  GTVerifyEmailResponse,
  GTVerifyEmailStatus,
} from '@family-dashboard/global/types';

interface Args {
  goToNextStep: () => void;
  goToErrorStep: () => void;
}

export function useVerifyEmail({ goToNextStep, goToErrorStep }: Args) {
  const [queryVerifyEmail, { data, loading }] = useLazyQuery<
    { verifySignUpEmail: GTVerifyEmailResponse },
    { email: string }
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
