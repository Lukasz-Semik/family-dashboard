import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { SignIn } from '../modules/Auth/SignIn/SignIn';

export function Routing() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/sign-up" exact render={() => <div>Sign up</div>} />
      </Switch>
    </BrowserRouter>
  );
}
