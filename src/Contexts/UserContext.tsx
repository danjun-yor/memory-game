import * as React from "react";

export type User = {
  iat: number;
  email: string;
  id: string;
  name: string;
  password: string;
  records: Array<any>;
  createdAt: string;
  updatedAt: string | null;
};

export const UserContext = React.createContext<User | null>(null);
