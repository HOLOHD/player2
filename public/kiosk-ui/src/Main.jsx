import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Assets from "./Assets";
import { PlayerApi } from "./api";

const goBack = () => {
  PlayerApi.hideWindow().then().catch();
  return <Redirect to="/assets" />;
};

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/assets" />} />
        <Route path="/assets" component={Assets} />
        <Route path="/hide" render={goBack} />
        <Route component={Assets} />
      </Switch>
    </main>
  );
};

export default Main;
