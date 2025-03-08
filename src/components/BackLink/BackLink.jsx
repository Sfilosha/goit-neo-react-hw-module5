import React from "react";
import { Link } from "react-router-dom";
import css from "./BackLink.module.css";

export function BackLink({ children, link }) {
  return (
    <Link className={css.button} to={link}>
      {children}
    </Link>
  );
}

export default BackLink;
