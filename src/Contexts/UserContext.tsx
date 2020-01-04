import * as React from "react";

type User = {
  email: String;
  name: String;
};

const UserContext = React.createContext({});
