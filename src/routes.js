import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './views/login/Login';
import Registro from './views/register/styles/Registro';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro"  component={Registro}/>      
      </Switch>
    </Router>
  );
}
