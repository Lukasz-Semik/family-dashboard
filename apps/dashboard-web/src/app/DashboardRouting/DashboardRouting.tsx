import { FormattedMessage } from 'react-intl';
import { Switch } from 'react-router-dom';

import { LoaderFullScreen } from '@family-dashboard/design-system';
import { webRoutes } from '@family-dashboard/global/const';

import { Layout } from '../../layout/Layout';
import { Dashboard } from '../../modules/Dashboard/Dashboard';
import { useInitializeDashboard } from '../_hooks/useInitializeDashboard';
import { FamilySettingsRouting } from '../FamilySettingsRouting/FamilySettingsRouting';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

export function DashboardRouting() {
  const { isLoading } = useInitializeDashboard();

  if (isLoading) {
    return (
      <LoaderFullScreen content={<FormattedMessage id="shared.loadingApp" />} />
    );
  }

  return (
    <Layout>
      <Switch>
        <PrivateRoute
          exact
          path={webRoutes.dashboard.dashboardRoute.path}
          component={Dashboard}
        />

        <PrivateRoute
          exact
          path={webRoutes.dashboard.notificationsRoute.path}
          render={() => <div>Notifications</div>}
        />

        <PrivateRoute
          exact
          path={webRoutes.dashboard.organizationRoute.path}
          render={() => <div>Organization</div>}
        />

        <PrivateRoute
          exact
          path={webRoutes.dashboard.financeRoute.path}
          render={() => <div>Finance</div>}
        />

        <PrivateRoute
          exact
          path={webRoutes.dashboard.familyRoute.path}
          render={() => <div>Family</div>}
        />

        <PrivateRoute
          exact
          path={webRoutes.dashboard.accountRoute.path}
          render={() => <div>Account</div>}
        />

        <PrivateRoute
          path={webRoutes.dashboard.familySettings.familySettingsRoute.path}
          component={FamilySettingsRouting}
        />
      </Switch>
    </Layout>
  );
}
