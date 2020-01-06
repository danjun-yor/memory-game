import React, { Component } from "react";
import "./reset.scss";
import "./styles.scss";
import jwt from "jsonwebtoken";
import { Switch, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Game from "./Pages/Game";
import { UserContext, User, UserContextInput } from "./Contexts/UserContext";

interface Props {}

export interface State extends UserContextInput {}

class App extends Component<Props, State> {
  updateUser: () => void;

  constructor(props: any) {
    super(props);

    this.updateUser = () => {
      this.setState({
        user: this.getUser()
      });
    };

    this.state = {
      user: this.getUser(),
      updateUser: this.updateUser
    };
  }

  getUser() {
    const token = localStorage.getItem("token");

    if (token) {
      return jwt.verify(token!, "awesome-memory-game") as User;
    }
    return null;
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" render={() => <Game />} />
        </Switch>
      </UserContext.Provider>
    );
  }
}

export default App;
