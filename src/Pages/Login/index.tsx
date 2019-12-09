import React, { Component, useState } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import "./styles.scss";

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signUp(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

type TSignUpData = {
  name: String;
  email: String;
  password: String;
};

export default () => {
  const [signUp] = useMutation(SIGNUP_MUTATION);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const {
      data: {
        signUp: { token }
      }
    } = await signUp({
      variables: {
        name: "test",
        email: "test.email2",
        password: "test"
      }
    });
    localStorage.setItem("token", token);
  };

  return (
    <div className="container login-container">
      <form name="sign-in-form" className="sign-in-form" onSubmit={onSubmit}>
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
};
