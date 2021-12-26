import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import dayjs from 'dayjs';

import { ConfirmSignUpInvitation } from '@family-dashboard/fe-libs/api-graphql';
import { FD_TOKEN_KEY } from '@family-dashboard/global/const';
import { FULL_DATE_FORMAT } from '@family-dashboard/global/const';
import { sdkSetToSessionStorage } from '@family-dashboard/global/sdk';
import {
  CTGender,
  CTInvitationConfirmInput,
  CTInvitationErrors,
  CTLoginResponse,
} from '@family-dashboard/global/types';

import { Values } from '../SignUp.types';

interface Args {
  setHasFailedPin: () => void;
  goToNextStep: () => void;
}

export function useConfirmSignUpInvitation({
  setHasFailedPin,
  goToNextStep,
}: Args) {
  const [confirmSignUpInvitationMutation, { loading }] = useMutation<
    { confirmSignUpInvitation: CTLoginResponse },
    { input: CTInvitationConfirmInput }
  >(ConfirmSignUpInvitation, {
    onCompleted: (responseData) => {
      sdkSetToSessionStorage(
        FD_TOKEN_KEY,
        responseData?.confirmSignUpInvitation?.accessToken
      );
      goToNextStep();
    },
    onError: (error) => {
      if (error.graphQLErrors[0]?.message === CTInvitationErrors.CodeInvalid) {
        setHasFailedPin();
      }
    },
  });

  const confirmSignUpInvitation = useCallback(
    (values: Values) => {
      const {
        isConsentGiven,
        isLastNameDifferent,
        code0,
        code1,
        code2,
        code3,
        gender,
        familyName,
        ...rest
      } = values;
      const code = `${code0}${code1}${code2}${code3}`;

      confirmSignUpInvitationMutation({
        variables: {
          input: {
            ...rest,
            code,
            gender: gender as CTGender,
            dob: dayjs(values.dob, FULL_DATE_FORMAT).toDate(),
          },
        },
      });
    },
    [confirmSignUpInvitationMutation]
  );

  return {
    confirmSignUpInvitation,
    isLoadingSignUpInvitation: loading,
  };
}
