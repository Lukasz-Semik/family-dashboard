import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { showErrorToast } from '@family-dashboard/design-system';
import { ConfirmUserInvitation } from '@family-dashboard/fe-libs/api-graphql';
import { FD_TOKEN_KEY } from '@family-dashboard/global/const';
import { sdkSetToSessionStorage } from '@family-dashboard/global/sdk';
import {
  GTLoginDisplay,
  GTConfirmUserInvitationInput,
  GTGender,
} from '@family-dashboard/global/types';

import { Values } from '../ConfirmInvitedUser.types';

interface Args {
  goToNextStep: () => void;
}

export function useConfirmUserInvitation({ goToNextStep }: Args) {
  const match = useRouteMatch<{ token: string }>();

  const [confirmUserInvitationMutation, { loading }] = useMutation<
    { confirmUserInvitation: GTLoginDisplay },
    { input: GTConfirmUserInvitationInput; token: string }
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
            security: {
              password,
            },
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
