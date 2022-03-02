import { useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';

import { showErrorToast } from '@family-dashboard/design-system';
import {
  ApiInvitationDisplay,
  CancelInvitation,
} from '@family-dashboard/fe-libs/api-graphql';
import {
  useSelectFamily,
  webStoreFamilyActions,
} from '@family-dashboard/web-libs/store';

export function useFamilySettingsInvitationsList() {
  const family = useSelectFamily();
  const dispatch = useDispatch();
  const [selectedInvitation, setSelectedInvitation] =
    useState<ApiInvitationDisplay | null>(null);
  const [cancelInvitationMutation, { loading }] = useMutation<{
    cancelInvitation: boolean;
    fullKey: string;
  }>(CancelInvitation, {
    onError: () => {
      showErrorToast(<FormattedMessage id="errors.somethingWentWrong" />);
    },
  });

  const cancelInvitation = useCallback(
    async (fullKey?: string) => {
      if (!fullKey) {
        showErrorToast(<FormattedMessage id="errors.somethingWentWrong" />);
        return;
      }

      await cancelInvitationMutation({
        variables: {
          fullKey,
        },
      });

      dispatch(
        webStoreFamilyActions.setFamilyDataInvitations(
          family.data.invitations.filter(
            (invitation) => invitation.fullKey !== fullKey
          )
        )
      );

      setSelectedInvitation(null);
    },
    [family.data.invitations, cancelInvitationMutation, dispatch]
  );

  return {
    isLoading: loading,
    family,
    setSelectedInvitation,
    selectedInvitation,
    cancelInvitation,
  };
}
