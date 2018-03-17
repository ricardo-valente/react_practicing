import React from 'react';

const person = props => (
  <div>
    <h3>I am {props.name} and I am {props.age} years old!</h3>
    <p>{props.children}</p>
  </div>
);

export default person;