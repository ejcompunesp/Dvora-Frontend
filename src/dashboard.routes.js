import React from "react";
import { Switch } from "react-router-dom";

import { routes } from "./views/dashboard/routes";

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
