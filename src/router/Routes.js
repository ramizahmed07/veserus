import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../components/NotFound";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const Routes = ({ routes }) => {
  console.log({ routesInRoutes: routes });
  return (
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.path} {...route} />
      ))}
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
