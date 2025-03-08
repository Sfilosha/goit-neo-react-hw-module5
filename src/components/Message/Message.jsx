import React from "react";

function Message({ title, message }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Message;
