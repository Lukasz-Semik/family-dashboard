import { useCallback } from 'react';
import { useMutation } from '@apollo/client';
import dayjs from 'dayjs';

import { ConfirmSignUpInvitation } from '@family-dashboard/fe-libs/api-graphql';
import {
  CTConfirmInvitationInput,
  CTGender,
} from '@family-dashboard/global/types';

import { Values } from '../SignUp.types';

export function useConfirmSignUpInvitation() {
  const [confirmSignUpInvitationMutation] = useMutation<
    { confirmSignUpInvitation: boolean },
    { input: CTConfirmInvitationInput }
  >(ConfirmSignUpInvitation);

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
            ...rest,
            code,
            gender: gender as CTGender,
            dob: dayjs(values.dob).toDate(),
          },
        },
      });
    },
    [confirmSignUpInvitationMutation]
  );

  return {
    confirmSignUpInvitation,
  };
}
