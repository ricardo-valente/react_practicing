import React from 'react';
import './Person.css';

const person = props => (
  <div className="person">
    <h3 onClick={props.click}>I am {props.name} and I am {props.age} years old!</h3>
    <p>{props.children}</p>
    <input type="text" onChange={props.change} value={props.name} />
  </div>
);

export default person;