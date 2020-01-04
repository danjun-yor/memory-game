import React, { Component } from "react";
import "./reset.scss";
import "./styles.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Game from "./Pages/Game";

const App: React.FC = () => (
  <Switch>
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/signup" component={SignUp} />
    <Route exact path="/" render={() => <Game />} />
  </Switch>
);

export default App;
