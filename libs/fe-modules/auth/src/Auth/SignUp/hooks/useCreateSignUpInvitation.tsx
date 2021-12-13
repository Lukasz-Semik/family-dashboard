import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useMutation } from '@apollo/client';
import dayjs from 'dayjs';

import { showErrorToast } from '@family-dashboard/design-system';
import { CreateSignUpInvitation } from '@family-dashboard/fe-libs/api-graphql';
import { FULL_DATE_FORMAT } from '@family-dashboard/global/const';
import { CTCreateInvitationInput } from '@family-dashboard/global/types';

import { Values } from '../SignUp.types';

export function useCreateSignUpInvitation() {
  const [createSignUpInvitationMutation] = useMutation<
    { createSignUpInvitation: boolean },
    { input: CTCreateInvitationInput }
  >(CreateSignUpInvitation, {
    onError: () =>
      showErrorToast(
        <FormattedMessage id="shared.errors.somethingWentWrong" />
      ),
  });

  const createSignUpInvitation = useCallback(
    (values: Values) => {
      const {
        isConsentGiven,
        isLastNameDifferent,
        password,
        code0,
        code1,
        code2,
        code3,
        ...rest
      } = values;

      createSignUpInvitationMutation({
        variables: {
          input: {
            ...rest,
            dob: dayjs(values.dob, FULL_DATE_FORMAT).toDate(),
            inviterName: values.firstName,
          },
        },
      });
    },
    [createSignUpInvitationMutation]
  );

  return {
    createSignUpInvitation,
  };
}
