import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "normalize.css";
import App from "./App";
import { Router } from "react-router-dom";
import { history } from "./history";
import { UserContext } from "./Contexts/UserContext";
import jwt from "jsonwebtoken";
import { User } from "./Contexts/UserContext";

library.add(fas);

const token = localStorage.getItem("token");
const user = jwt.verify(token!, "awesome-memory-game") as User;

ReactDOM.render(
  <UserContext.Provider value={user}>
    <Router history={history}>
      <App />
    </Router>
  </UserContext.Provider>,
  document.getElementById("root")
);
