import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import dayjs from 'dayjs';

import { CreateSignUpInvitation } from '@family-dashboard/fe-libs/api-graphql';
import { CTCreateInvitationInput } from '@family-dashboard/global/types';

import { Values } from '../SignUp.types';

export function useCreateSignUpInvitation() {
  const [createSignUpInvitationMutation] = useMutation<
    { createSignUpInvitation: boolean },
    { input: CTCreateInvitationInput }
  >(CreateSignUpInvitation);

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
            dob: dayjs(values.dob).toDate(),
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
