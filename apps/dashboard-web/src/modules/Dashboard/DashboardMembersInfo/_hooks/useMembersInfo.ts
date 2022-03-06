import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { webRoutes } from '@family-dashboard/global/const';
import { useSelectFamily } from '@family-dashboard/web-libs/store';

export function useMembersInfo() {
  const family = useSelectFamily();
  const history = useHistory();

  const invitationsQuantity = family.data.invitations.length;

  const shouldShowPrirityError =
    family.data.members.length < 1 && invitationsQuantity < 1;

  const redirectToCreateMember = useCallback(() => {
    history.push(
      webRoutes.dashboard.familySettings.familySettingsCreateUserRoute.path
    );
  }, [history]);

  return {
    invitationsQuantity,
    shouldShowPrirityError,
    redirectToCreateMember,
  };
}
