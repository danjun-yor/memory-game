import React from "react";
import "./styles.scss";
import { history } from "../../history";

export default function LinkButton(props: any) {
  const { location, match, staticContext, to, onClick, ...rest } = props;

  return (
    <button
      {...rest}
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    />
  );
}
