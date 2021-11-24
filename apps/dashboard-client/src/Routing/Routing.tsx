import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Dashboard } from '../modules/Dashboard/Dashboard';
import { SignIn } from '../modules/SignIn/SignIn';
import { SignUp } from '../modules/SignUp/SignUp';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { routes } from './routes';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.signInRoute()} exact component={SignIn} />
        <Route path={routes.signUpRoute()} exact component={SignUp} />
        <PrivateRoute path={routes.dashboardRoute()} component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
