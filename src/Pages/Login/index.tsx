import React, { Component } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import "./styles.scss";

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
      <div className="container login-container">
        <form name="sign-in-form" className="sign-in-form">
          <div className="row">
            <label htmlFor="id">이메일</label>
            <input type="text" name="id" id="id" />
          </div>
          <div className="row">
            <label htmlFor="password">비밀번호</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="row">
            <label htmlFor="name">이름</label>
            <input type="text" name="name" id="name" />
          </div>
          <input type="submit" className="btn-login" value="로그인" />
        </form>
      </div>
    );
  }
}

export default Login;
