import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import dayjs from 'dayjs';

import { showErrorToast } from '@family-dashboard/design-system';
import { CreateUserInvitation } from '@family-dashboard/fe-libs/api-graphql';
import {
  fdStoreFamilyActions,
  useSelectFamily,
  useSelectUser,
} from '@family-dashboard/fe-libs/fd-store';
import { fdRoutes, FULL_DATE_FORMAT } from '@family-dashboard/global/const';
import {
  CTInvitationCreateInput,
  CTInvitationDisplayData,
  CTInvitationErrors,
  CTMemberType,
  CTUserModulePermission,
} from '@family-dashboard/global/types';

import { Values } from '../CreateMemberForm.types';

interface Args {
  closeModal: () => void;
}

export function useCreateUserInvitation({ closeModal }: Args) {
  const family = useSelectFamily();
  const user = useSelectUser();
  const dispatch = useDispatch();
  const history = useHistory();

  const [createUserInvitationMutation, { loading }] = useMutation<
    {
      createUserInvitation: CTInvitationDisplayData;
    },
    { input: CTInvitationCreateInput }
  >(CreateUserInvitation, {
    onCompleted: (responseData) => {
      dispatch(
        fdStoreFamilyActions.setInvitations([
          responseData.createUserInvitation,
          ...family.invitations,
        ])
      );
      history.push(fdRoutes.dashboard.familySettings.familySettingsRoute.path);
    },
    onError: (errors) => {
      if (
        errors.graphQLErrors[0].message ===
          CTInvitationErrors.EmailAlreadyInUse ||
        errors.graphQLErrors[0].message ===
          CTInvitationErrors.EmailAlreadyInvited
      ) {
        showErrorToast(
          <FormattedMessage id="auth.signUp.verifyEmail.alreadyCreated.title" />
        );
      } else {
        showErrorToast(<FormattedMessage id="errors.somethingWentWrong" />);
      }

      closeModal();
    },
  });

  const createUserInvitation = useCallback(
    ({
      hasFamilySettingsModulePermission,
      hasFinancialModulePermission,
      ...values
    }: Values) => {
      createUserInvitationMutation({
        variables: {
          input: {
            ...values,
            dob: dayjs(values.dob, FULL_DATE_FORMAT).toDate(),
            inviterName: user.data.firstName,
            modulePermissions: [
              hasFamilySettingsModulePermission
                ? CTUserModulePermission.FamilySettings
                : undefined,
              hasFinancialModulePermission
                ? CTUserModulePermission.Financial
                : undefined,
            ].filter(Boolean) as CTUserModulePermission[],
            memberType: CTMemberType.AdultUser,
          },
        },
      });
    },
    [user.data.firstName, createUserInvitationMutation]
  );

  return {
    createUserInvitation,
    isLoading: loading,
  };
}
