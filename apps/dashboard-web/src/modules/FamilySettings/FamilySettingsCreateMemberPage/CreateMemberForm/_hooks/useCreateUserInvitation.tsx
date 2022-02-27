import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { showErrorToast } from '@family-dashboard/design-system';
import {
  ApiWebInvitationDisplay,
  CreateUserInvitation,
} from '@family-dashboard/fe-libs/api-graphql';
import { webRoutes } from '@family-dashboard/global/const';
import {
  CTInvitationErrors,
  GTGender,
  GTInputCreateUserInvitation,
  GTMemberType,
} from '@family-dashboard/global/types';
import {
  useSelectFamily,
  useSelectUser,
  webStoreFamilyActions,
} from '@family-dashboard/web-libs/store';

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
      createUserInvitation: ApiWebInvitationDisplay;
    },
    { input: GTInputCreateUserInvitation }
  >(CreateUserInvitation, {
    onCompleted: (responseData) => {
      console.log(responseData);
      dispatch(
        webStoreFamilyActions.setFamilyDataInvitations([
          responseData.createUserInvitation,
          ...family.data.invitations,
        ])
      );
      history.push(webRoutes.dashboard.familySettings.familySettingsRoute.path);
    },
    onError: (errors) => {
      if (
        errors.graphQLErrors[0]?.message ===
          CTInvitationErrors.EmailAlreadyInUse ||
        errors.graphQLErrors[0]?.message ===
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
      email,
      gender,
      ...personalDetails
    }: Values) => {
      createUserInvitationMutation({
        variables: {
          input: {
            email,
            personalDetails: {
              ...personalDetails,
              gender: gender as GTGender,
            },
            invitationDetails: {
              inviterName: user.data.personalDetails.firstName,
              inviterEmail: user.data.email,
              familyName: family.data.familyDetails.name,
            },
            modulePermissions: {
              hasFamilySettings: hasFamilySettingsModulePermission,
              hasFinanacial: hasFinancialModulePermission,
            },
            memberType: GTMemberType.AdultUser,
          },
        },
      });
    },
    [
      user.data.personalDetails.firstName,
      user.data.email,
      family.data.familyDetails.name,
      createUserInvitationMutation,
    ]
  );

  return {
    createUserInvitation,
    isLoading: loading,
  };
}
