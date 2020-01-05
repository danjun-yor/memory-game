import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./styles.scss";
import MyClient from "../../MyClient";

export default () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  let isSubmitting = false;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    if (!email) {
      alert("이메일을 입력해주세요.");
      emailRef.current!.focus();
      return;
    }
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      passwordRef.current!.focus();
      return;
    }

    if (isSubmitting) {
      return;
    }

    isSubmitting = true;
    const { data, errors } = await MyClient.requestWithGraphQL(`mutation { 
      signIn(email: "${email}", password: "${password}") {
        token
      }
   }`);
    isSubmitting = false;

    if (errors) {
      alert(errors[0].message);
      return;
    }
    const { token } = data.signIn;
    localStorage.setItem("token", token);

    history.push("/");
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
