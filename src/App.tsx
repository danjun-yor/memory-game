import React, { Component } from "react";
import "./reset.scss";
import "./styles.scss";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import Game from "./Components/Game";

interface Props {}
interface State {}

export default class App extends Component<Props, State> {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" render={() => <Game />} />
      </Switch>
    );
  }
}
