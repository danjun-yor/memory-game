import React, { useState, useRef } from "react";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import "./styles.scss";

const SIGNUP_MUTATION = gql`
  mutation SignUpMutation($email: String!, $password: String!, $name: String!) {
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
  const [signUpMutation] = useMutation(SIGNUP_MUTATION);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const signUp = async () => {
    const {
      data: {
        signUp: { token }
      }
    } = await signUpMutation({
      variables: {
        name: nameRef.current,
        email: emailRef.current,
        password: passwordRef.current
      }
    });
    return;
    localStorage.setItem("token", token);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    signUp();
  };

  return (
    <div className="container auth-container">
      <form name="sign-up-form" className="sign-up-form" onSubmit={onSubmit}>
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
        <div className="row">
          <label htmlFor="name">이름</label>
          <input type="text" name="name" id="name" ref={nameRef} />
        </div>
        <input type="submit" className="btn-signup" value="회원가입" />
      </form>
    </div>
  );
};
