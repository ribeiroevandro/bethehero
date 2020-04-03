import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Welcome from '~/screens/Welcome';
import SignUp from '~/screens/SignUp';
import Profile from '~/screens/Profile';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/register" exact component={SignUp} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}
