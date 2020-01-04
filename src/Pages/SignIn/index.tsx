import React, { useRef } from "react";
import "./styles.scss";

export default () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    signIn();
  };

  const signIn = async () => {
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

    const res = await fetch("http://localhost:4000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },

      body: JSON.stringify({
        query: `mutation { 
          signIn(email: "${email}", password: "${password}") {
            token
          }
       }`
      })
    });
    const { data, errors } = await res.json();
    if (errors) {
      alert(errors[0].message);
      return;
    }
    const { token } = data;
    localStorage.setItem("token", token);
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
