import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { fdRoutes } from '@family-dashboard/global/const';

import { SignIn } from '../modules/Auth/SignIn/SignIn';
import { SignUp } from '../modules/Auth/SignUp/SignUp';
import { DashboardRouting } from './DashboardRouting/DashboardRouting';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={fdRoutes.auth.signInRoute()} exact component={SignIn} />
        <Route path={fdRoutes.auth.signUpRoute()} exact component={SignUp} />
        <PrivateRoute
          path={fdRoutes.dashboard.dashboardRoute()}
          component={DashboardRouting}
        />
      </Switch>
    </BrowserRouter>
  );
}
