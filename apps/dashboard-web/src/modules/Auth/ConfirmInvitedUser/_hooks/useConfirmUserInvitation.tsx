import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { showErrorToast } from '@family-dashboard/design-system';
import {
  APIConfirmUserInvitationResponse,
  APIConfirmUserInvitationVariables,
  ConfirmUserInvitation,
} from '@family-dashboard/fe-libs/api-graphql';
import { FD_TOKEN_KEY } from '@family-dashboard/global/const';
import { sdkSetToSessionStorage } from '@family-dashboard/global/sdk';
import { GTGender } from '@family-dashboard/global/types';

import { Values } from '../ConfirmInvitedUser.types';

interface Args {
  goToNextStep: () => void;
}

export function useConfirmUserInvitation({ goToNextStep }: Args) {
  const match = useRouteMatch<{ token: string }>();

  const [confirmUserInvitationMutation, { loading }] = useMutation<
    APIConfirmUserInvitationResponse,
    APIConfirmUserInvitationVariables
  >(ConfirmUserInvitation, {
    onCompleted: (responseData) => {
      sdkSetToSessionStorage(
        FD_TOKEN_KEY,
        responseData?.confirmUserInvitation?.accessToken
      );
      goToNextStep();
    },
    onError: () => {
      showErrorToast(<FormattedMessage id="errors.somethingWentWrong" />);
    },
  });

  const confirmUserInvitation = useCallback(
    (values: Values) => {
      const { gender, email, password, ...rest } = values;

      confirmUserInvitationMutation({
        variables: {
          token: match.params.token,
          input: {
            email,
            personalDetails: {
              ...rest,
              gender: gender as GTGender,
            },
            password,
          },
        },
      });
    },
    [confirmUserInvitationMutation, match.params.token]
  );

  return {
    confirmUserInvitation,
    isLoadingUserInvitation: loading,
  };
}
