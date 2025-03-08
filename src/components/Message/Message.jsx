import React from "react";
import css from "./Message.module.css";

function Message({ title, message }) {
  return (
    <div className={css.wrapper}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Message;
