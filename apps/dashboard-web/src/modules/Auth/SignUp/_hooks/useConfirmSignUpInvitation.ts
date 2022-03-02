import { useCallback } from 'react';
import { useMutation } from '@apollo/client';

import { ConfirmSignUpInvitation } from '@family-dashboard/fe-libs/api-graphql';
import { FD_TOKEN_KEY } from '@family-dashboard/global/const';
import { sdkSetToSessionStorage } from '@family-dashboard/global/sdk';
import {
  CTInvitationErrors,
  CTLoginResponse,
  GTConfirmSignUpInvitationInput,
  GTGender,
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
    { input: GTConfirmSignUpInvitationInput }
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
        ...rest
      } = values;
      const code = `${code0}${code1}${code2}${code3}`;

      confirmSignUpInvitationMutation({
        variables: {
          input: {
            email: rest.email,
            invitationDetails: {
              familyName: rest.familyName,
              code,
            },
            security: {
              password: rest.password,
            },
            personalDetails: {
              firstName: rest.firstName,
              middleName: rest.middleName,
              lastName: rest.lastName,
              dob: rest.dob,
              // TODODB: fix type
              gender: gender as unknown as GTGender,
            },
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
