import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "./views/dashboard/routes";
console.log(routes);
const DashboardRouter = () => {
  return (
    <Switch>
      {routes.map((route, idx) => (
        <Route exact path={route.path} key={idx} component={route.component} />
      ))}
    </Switch>
  );
};

export default DashboardRouter;
