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

export type UserContextInput = {
  user: Partial<User> | null;
  updateUser: () => void;
};

export const UserContext = React.createContext<UserContextInput>({
  user: {},
  updateUser: () => {}
});
