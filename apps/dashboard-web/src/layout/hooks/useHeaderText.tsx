import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useHistory } from 'react-router-dom';

import { webRoutes } from '@family-dashboard/global/const';

export function useHeaderText() {
  const history = useHistory();

  const headerText = useMemo(() => {
    if (
      history.location.pathname.includes(
        webRoutes.dashboard.organizationRoute.path
      )
    ) {
      return <FormattedMessage id="organization.title" />;
    }

    if (
      history.location.pathname.includes(
        webRoutes.dashboard.notificationsRoute.path
      )
    ) {
      return <FormattedMessage id="notifications.title" />;
    }

    if (
      history.location.pathname.includes(webRoutes.dashboard.financeRoute.path)
    ) {
      return <FormattedMessage id="finance.title" />;
    }

    if (
      history.location.pathname.includes(webRoutes.dashboard.familyRoute.path)
    ) {
      return <FormattedMessage id="family.title" />;
    }

    if (
      history.location.pathname.includes(
        webRoutes.dashboard.familySettings.familySettingsRoute.path
      )
    ) {
      return <FormattedMessage id="familySettings.title" />;
    }

    if (
      history.location.pathname.includes(webRoutes.dashboard.accountRoute.path)
    ) {
      return <FormattedMessage id="account.title" />;
    }

    return <FormattedMessage id="dashboard.title" />;
  }, [history.location.pathname]);

  return {
    headerText,
  };
}
