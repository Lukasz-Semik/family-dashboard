import { Switch } from 'react-router-dom';

import { fdRoutes } from '@family-dashboard/global/const';

import { Layout } from '../../layout/Layout';
import { Dashboard } from '../../modules/Dashboard/Dashboard';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

export function DashboardRouting() {
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          exact
          path={fdRoutes.dashboard.dashboardRoute()}
          component={Dashboard}
        />

        <PrivateRoute
          exact
          path={fdRoutes.dashboard.organizationRoute()}
          render={() => <div>Organization</div>}
        />

        <PrivateRoute
          exact
          path={fdRoutes.dashboard.financeRoute()}
          render={() => <div>Finance</div>}
        />

        <PrivateRoute
          exact
          path={fdRoutes.dashboard.familyRoute()}
          render={() => <div>Family</div>}
        />

        <PrivateRoute
          exact
          path={fdRoutes.dashboard.accountRoute()}
          render={() => <div>Account</div>}
        />

        <PrivateRoute
          path={fdRoutes.dashboard.familySettingsRoute()}
          render={() => <div>Family Settings</div>}
        />
      </Switch>
    </Layout>
  );
}
