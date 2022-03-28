import React, { useState } from "react";

const Welcome = React.memo((props) => {
  let goTo = (option) => {
    if (option == "sign_in") {
      props.history.push("/sign-in");
    } else if (option == "sign_up") {
      props.history.push("/sign-up");
    }
  };

  return (
    <section>
      <h1>Example</h1>
      <p>This is a message for the public</p>
    </section>
  );
});

export default Welcome;
