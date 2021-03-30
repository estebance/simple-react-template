import React, { useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Welcome.scss';

const Welcome = React.memo(props => {

  let goTo = (option) => {
    if (option == 'sign_in'){
        props.history.push('/sign-in');
    } else if (option == 'sign_up'){
        props.history.push('/sign-up');
    }
  };

  return (
    <section>
        <Jumbotron>
          <h1>Example</h1>
          <p>
              This is a message for the public
          </p>
          <p>
                <Button variant="primary" onClick={(e) => {goTo('sign_in')}}>Sign In</Button>
          </p>
        </Jumbotron>
    </section>
  );
});

export default Welcome;

