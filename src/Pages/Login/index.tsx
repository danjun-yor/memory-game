import React, { Component } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

interface Props {}
interface State {}

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

class Login extends Component<Props, State> {
  state = {
    login: true
  };

  signUp = async (data: any) => {
    const { token } = data;
    localStorage.setItem("memory-game", token);

    // this.props.history.push(`/`);
  };

  render() {
    return (
      <>
        <form name="sign-in-form">
          <label htmlFor="id">이름</label>
          <input type="text" name="id" id="id" />
          <label htmlFor="password">이름</label>
          <input type="password" name="password" id="password" />
          <label htmlFor="name">이름</label>
          <input type="text" name="name" id="name" />
          <input type="submit" value="로그인" />
        </form>
      </>
    );
  }
}

export default Login;
