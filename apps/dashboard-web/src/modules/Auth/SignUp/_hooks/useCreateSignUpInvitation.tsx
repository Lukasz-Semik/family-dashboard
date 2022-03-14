import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useMutation } from '@apollo/client';

import { showErrorToast } from '@family-dashboard/design-system';
import {
  APICreateSignUpInvitationResponse,
  APICreateSignUpInvitationVariables,
  CreateSignUpInvitation,
} from '@family-dashboard/fe-libs/api-graphql';
import { GTGender } from '@family-dashboard/global/types';

import { Values } from '../SignUp.types';

export function useCreateSignUpInvitation() {
  const [createSignUpInvitationMutation] = useMutation<
    APICreateSignUpInvitationResponse,
    APICreateSignUpInvitationVariables
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
              gender: rest.gender as GTGender,
            },
            details: {
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
