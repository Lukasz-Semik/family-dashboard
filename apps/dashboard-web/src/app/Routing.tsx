import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { webRoutes } from '@family-dashboard/global/const';

import { ConfirmInvitedUser } from '../modules/Auth/ConfirmInvitedUser/ConfirmInvitedUser';
import { SignIn } from '../modules/Auth/SignIn/SignIn';
import { SignUp } from '../modules/Auth/SignUp/SignUp';
import { DashboardRouting } from './DashboardRouting/DashboardRouting';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={webRoutes.auth.signInRoute.path}
          exact
          component={SignIn}
        />
        <Route
          path={webRoutes.auth.signUpRoute.path}
          exact
          component={SignUp}
        />
        <Route
          path={webRoutes.auth.confirmInvitedUserRoute.path}
          exact
          component={ConfirmInvitedUser}
        />

        <PrivateRoute
          path={webRoutes.dashboard.dashboardRoute.path}
          component={DashboardRouting}
        />
      </Switch>
    </BrowserRouter>
  );
}
