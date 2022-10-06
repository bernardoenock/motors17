import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AdDetails from "../pages/AdDetails";
import ProfileViewUser from "../pages/ProfileViewUser";
import PageNotFound from "../pages/NotFound";
import ProfileViewSeller from "../pages/ProfileViewSeller";
import { useUser } from "../Providers/User";
import MyPushase from "../pages/MyPorchase";

const Router: React.FC = () => {
  const { token } = useUser();

  return (
    <Switch>
      <Route exact path={"/"} component={Home} />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/register"} component={Register} />
      <Route exact path={"/ad_details"} component={AdDetails} />
      <Route exact path={"/profile"}>
        {!!token ? <ProfileViewUser /> : <Redirect to="/" />}
      </Route>
      <Route exact path={"/my_purshases"} component={MyPushase} />
      <Route exact path={"/seller"} component={ProfileViewSeller} />
      <Route exact path={"/:not_found"} component={PageNotFound} />
    </Switch>
  );
};

export default Router;
