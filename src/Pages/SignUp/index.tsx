import React, { useRef } from "react";
import "./styles.scss";
import MyClient from "../../MyClient";
import { useHistory } from "react-router-dom";

export default () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  let isSubmitting = false;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const name = nameRef.current!.value;
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
    if (!name) {
      alert("이름를 입력해주세요.");
      nameRef.current!.focus();
      return;
    }

    if (isSubmitting) {
      return;
    }

    isSubmitting = true;
    const { data, errors } = await MyClient.requestWithGraphQL(`mutation { 
      signUp(email: "${email}", password: "${password}", name: "${name}") {
        token
      }
   }`);
    isSubmitting = false;

    if (errors) {
      alert(errors[0].message);
      return;
    }
    const { token } = data.signUp;
    localStorage.setItem("token", token);

    alert("회원가입이 완료되었습니다.");
    history.push("/");
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
