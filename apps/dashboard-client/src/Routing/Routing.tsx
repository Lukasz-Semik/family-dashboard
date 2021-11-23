import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SignIn } from '../modules/Auth/SignIn/SignIn';
import { Dashboard } from '../modules/Dashboard/Dashboard';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/sign-up" exact render={() => <div>Sign up</div>} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}
