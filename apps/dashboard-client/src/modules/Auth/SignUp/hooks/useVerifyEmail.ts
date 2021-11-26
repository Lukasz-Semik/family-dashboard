import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/client';

import {
  CTVerifyEmailResponse,
  CTVerifyEmailResponseStatus,
} from '@family-dashboard/common-types';

import { VerifySignUpEmail } from '../../../../api/queries/user';

interface Args {
  goToNextStep: () => void;
  goToErrorStep: () => void;
}

export function useVerifyEmail({ goToNextStep, goToErrorStep }: Args) {
  const [queryVerifyEmail, { data, loading }] = useLazyQuery<
    { verifySignUpEmail: CTVerifyEmailResponse },
    { email: string }
  >(VerifySignUpEmail, {
    onCompleted: (data) => {
      if (
        data?.verifySignUpEmail.status === CTVerifyEmailResponseStatus.Success
      ) {
        goToNextStep();
      } else {
        goToErrorStep();
      }
    },
    onError: () => console.log('error'),
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
