import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRouteMatch } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import dayjs from 'dayjs';

import { showErrorToast } from '@family-dashboard/design-system';
import { ConfirmUserInvitation } from '@family-dashboard/fe-libs/api-graphql';
import { FD_TOKEN_KEY, FULL_DATE_FORMAT } from '@family-dashboard/global/const';
import { sdkSetToSessionStorage } from '@family-dashboard/global/sdk';
import {
  CTGender,
  CTInvitationUserConfirmInput,
  CTLoginResponse,
} from '@family-dashboard/global/types';

import { Values } from '../ConfirmInvitedUser.types';

interface Args {
  goToNextStep: () => void;
}

export function useConfirmUserInvitation({ goToNextStep }: Args) {
  const match = useRouteMatch<{ token: string }>();

  const [confirmUserInvitationMutation, { loading }] = useMutation<
    { confirmUserInvitation: CTLoginResponse },
    { input: CTInvitationUserConfirmInput; token: string }
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
      const { gender, ...rest } = values;

      confirmUserInvitationMutation({
        variables: {
          token: match.params.token,
          input: {
            ...rest,
            gender: gender as CTGender,
            dob: dayjs(values.dob, FULL_DATE_FORMAT).toDate(),
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
