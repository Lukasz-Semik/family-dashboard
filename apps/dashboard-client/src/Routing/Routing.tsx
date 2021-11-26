import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SignIn } from '../modules/Auth/SignIn/SignIn';
import { SignUp } from '../modules/Auth/SignUp/SignUp';
import { Dashboard } from '../modules/Dashboard/Dashboard';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { routes } from './routes';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.auth.signInRoute()} exact component={SignIn} />
        <Route path={routes.auth.signUpRoute()} exact component={SignUp} />
        <PrivateRoute
          path={routes.dashboard.dashboardRoute()}
          component={Dashboard}
        />
      </Switch>
    </BrowserRouter>
  );
}
