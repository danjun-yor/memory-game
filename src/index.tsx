import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "normalize.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

library.add(fas);

ReactDOM.render(
  <BrowserRouter
    basename={process.env.NODE_ENV === "production" ? "/memory-game" : "/"}
  >
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
