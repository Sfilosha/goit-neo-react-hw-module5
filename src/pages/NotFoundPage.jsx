import React from "react";
import Message from "../components/Message/Message";

function NotFound() {
  return (
    <section className="container">
      <Message
        title={"Ooops.. this way is closed"}
        message={"Page not found"}
      />
    </section>
  );
}

export default NotFound;
