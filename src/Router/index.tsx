import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdDetails from "../pages/AdDetails";
import ProfileViewUser from "../pages/ProfileViewUser";
import PageNotFound from "../pages/NotFound";

const Router: React.FC = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/register"} component={Register} />
      <Route exact path={"/preview"} component={Dashboard} />
      <Route exact path={"/ad_details"} component={AdDetails} />
      <Route exact path={"/profile"} component={ProfileViewUser} />
      <Route exact path={"/:not_found"} component={PageNotFound} />
    </Switch>
  );
};

export default Router;
