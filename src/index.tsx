import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ApolloProvider } from "react-apollo-hooks";
import "normalize.css";
import App from "./App";
import Client from "./Apollo/Client";
import { Router } from "react-router-dom";
import { history } from "./history";

library.add(fas);

ReactDOM.render(
  <ApolloProvider client={Client}>
    <Router history={history}>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
