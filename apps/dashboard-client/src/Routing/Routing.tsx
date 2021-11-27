import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { fdRoutes } from '@family-dashboard/global-constants';

import { SignIn } from '../Auth/SignIn/SignIn';
import { SignUp } from '../Auth/SignUp/SignUp';
import { Dashboard } from '../Dashboard/Dashboard';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={fdRoutes.auth.signInRoute()} exact component={SignIn} />
        <Route path={fdRoutes.auth.signUpRoute()} exact component={SignUp} />
        <PrivateRoute
          path={fdRoutes.dashboard.dashboardRoute()}
          component={Dashboard}
        />
      </Switch>
    </BrowserRouter>
  );
}
