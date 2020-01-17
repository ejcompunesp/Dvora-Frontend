import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './views/login/Login';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />        
      </Switch>
    </Router>
  );
}
