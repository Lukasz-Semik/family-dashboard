import { Switch } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { LoaderFullScreen } from '@family-dashboard/design-system';
import { GetUserInitialAppState } from '@family-dashboard/fe-libs/api-graphql';
import { fdRoutes } from '@family-dashboard/global/const';

import { Layout } from '../../layout/Layout';
import { Dashboard } from '../../modules/Dashboard/Dashboard';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';

export function DashboardRouting() {
  const a = 's';
  const { data, loading } = useQuery(GetUserInitialAppState, {
    onCompleted: () => console.log('main'),
  });

  console.log({ loading });
  if (loading) {
    return <LoaderFullScreen content="Loading your dashboard..." />;
  }

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
