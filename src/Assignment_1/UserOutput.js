import React from 'react';
import './UserOutputStyles/UserOutputStyles.css';

const userOutput = (props) => {
  return (
    <div>
      <h4 className="userOutput">React is awesome!</h4>
      <p className="userOutput">Let´s do this {props.name}!</p>
      <p className="userOutput">After all you only have {props.age} years old.</p>
    </div>
  );
}

export default userOutput;