import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './views/login/Login';
import Registro from './views/registro/Registro'
import Dashboard from './views/dashboard/Dashboard';

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registro"  component={Registro}/>      
        <Route path="/dashboard"  component={Dashboard}/>      
      </Switch>
    </Router>
  );
}
