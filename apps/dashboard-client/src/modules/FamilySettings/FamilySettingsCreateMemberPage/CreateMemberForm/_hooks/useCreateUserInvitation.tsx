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
} from '@family-dashboard/fe-libs/fd-store';
import { fdRoutes, FULL_DATE_FORMAT } from '@family-dashboard/global/const';
import {
  CTInvitationCreateInput,
  CTInvitationDisplayData,
  CTMemberType,
  CTUserModulePermission,
} from '@family-dashboard/global/types';

import { Values } from '../CreateMemberForm.types';

interface Args {
  closeModal: () => void;
}

export function useCreateUserInvitation({ closeModal }: Args) {
  const family = useSelectFamily();
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
      history.push(fdRoutes.dashboard.familySettings.familySettingsRoute());
    },
    onError: () => {
      showErrorToast(<FormattedMessage id="errors.somethingWentWrong" />);
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
            inviterName: family.data.name,
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
    [family.data.name, createUserInvitationMutation]
  );

  return {
    createUserInvitation,
    isLoading: loading,
  };
}
