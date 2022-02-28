import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useMutation } from '@apollo/client';

import { showErrorToast } from '@family-dashboard/design-system';
import { CreateSignUpInvitation } from '@family-dashboard/fe-libs/api-graphql';
import {
  GTGender,
  GTCreateSignUpInvitationInput,
} from '@family-dashboard/global/types';

import { Values } from '../SignUp.types';

export function useCreateSignUpInvitation() {
  const [createSignUpInvitationMutation] = useMutation<
    { createSignUpInvitation: boolean },
    { input: GTCreateSignUpInvitationInput }
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
            email: rest.email,
            personalDetails: {
              firstName: rest.firstName,
              middleName: rest.middleName,
              lastName: rest.lastName,
              dob: rest.dob,
              // TODODB: fix type
              gender: rest.gender as unknown as GTGender,
            },
            invitationDetails: {
              familyName: rest.familyName,
              inviterEmail: rest.email,
              inviterName: rest.firstName,
            },
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
