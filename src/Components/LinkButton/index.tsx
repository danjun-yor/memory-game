import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

export default function LinkButton(props: any) {
  const { location, match, staticContext, to, onClick, ...rest } = props;

  return (
    <Link to={to}>
      <button {...rest} />
    </Link>
  );
}
