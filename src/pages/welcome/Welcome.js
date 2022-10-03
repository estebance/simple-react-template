import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = (props) => {
  let navigate = useNavigate();
  let goTo = (option) => {
    if (option == "sign_in") {
      navigate("/sign-in");
    } else if (option == "sign_up") {
      navigate("/sign-up");
    }
  };

  return (
    <section>
      <h1>Example</h1>
      <p onClick={(e) => goTo("sign_in")}>This is a message for the public</p>
    </section>
  );
};

export default Welcome;
