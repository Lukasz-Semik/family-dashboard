import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { fdRoutes } from '@family-dashboard/global/const';

import { ConfirmInvitedUser } from '../modules/Auth/ConfirmInvitedUser/ConfirmInvitedUser';
import { SignIn } from '../modules/Auth/SignIn/SignIn';
import { SignUp } from '../modules/Auth/SignUp/SignUp';
import { DashboardRouting } from './DashboardRouting/DashboardRouting';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={fdRoutes.auth.signInRoute.path} exact component={SignIn} />
        <Route path={fdRoutes.auth.signUpRoute.path} exact component={SignUp} />
        <Route
          path={fdRoutes.auth.confirmInvitedUserRoute.path}
          exact
          component={ConfirmInvitedUser}
        />

        <PrivateRoute
          path={fdRoutes.dashboard.dashboardRoute.path}
          component={DashboardRouting}
        />
      </Switch>
    </BrowserRouter>
  );
}
