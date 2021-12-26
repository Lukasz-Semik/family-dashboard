import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';

import { showErrorToast } from '@family-dashboard/design-system';
import { CancelInvitation } from '@family-dashboard/fe-libs/api-graphql';
import {
  fdStoreFamilyActions,
  useSelectFamily,
} from '@family-dashboard/fe-libs/fd-store';
import { CTInvitationDisplayData } from '@family-dashboard/global/types';

export function useFamilySettingsInvitationsList() {
  const family = useSelectFamily();
  const dispatch = useDispatch();
  const [selectedInvitation, setSelectedInvitation] =
    useState<CTInvitationDisplayData | null>(null);
  const [cancelInvitationMutation, { loading }] = useMutation<{
    cancelInvitation: boolean;
    email: string;
  }>(CancelInvitation, {
    onError: () => {
      showErrorToast(<FormattedMessage id="errors.somethingWentWrong" />);
    },
  });

  const cancelInvitation = useCallback(
    async (email?: string) => {
      if (!email) {
        showErrorToast(<FormattedMessage id="errors.somethingWentWrong" />);
        return;
      }

      await cancelInvitationMutation({
        variables: {
          email,
        },
      });

      dispatch(
        fdStoreFamilyActions.setInvitations(
          family.invitations.filter((invitation) => invitation.email !== email)
        )
      );

      setSelectedInvitation(null);
    },
    [family.invitations, cancelInvitationMutation, dispatch]
  );

  return {
    isLoading: loading,
    family,
    setSelectedInvitation,
    selectedInvitation,
    cancelInvitation,
  };
}
