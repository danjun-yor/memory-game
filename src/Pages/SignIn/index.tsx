import React, { useState, useRef } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import "./styles.scss";

const SIGNIN_MUTATION = gql`
  mutation SignInMutation($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
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
  const [signInMutation] = useMutation(SIGNIN_MUTATION);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signIn = async () => {
    const {
      data: {
        signUp: { token }
      }
    } = await signInMutation({
      variables: {
        email: emailRef.current,
        password: passwordRef.current
      }
    });
    localStorage.setItem("token", token);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    signIn();
  };

  return (
    <div className="container auth-container">
      <form name="sign-in-form" className="sign-in-form" onSubmit={onSubmit}>
        <div className="row">
          <label htmlFor="email">이메일</label>
          <input type="text" name="email" id="email" ref={emailRef} />
        </div>
        <div className="row">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>
        <input type="submit" className="btn-signin" value="로그인" />
      </form>
    </div>
  );
};
