import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { routes } from "./views/dashboard/routes";

import { isLoginMember } from './api/auth'

const JeRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoginMember() ? (
        <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
      ) : (
          <Component {...props} />
        )
    }
  />
);

const DashboardRouter = () => {
  return (
    <Switch>
      {routes.map((route, idx) => {
        return (
          route.limitRouteToJe ?
            <JeRoute exact path={route.path} key={idx} component={route.component} />
            :
            <Route exact path={route.path} key={idx} component={route.component} />
        )
      })}
    </Switch>
  );
};

export default DashboardRouter;
