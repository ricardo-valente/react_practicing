import React from 'react';

const userOutput = (props) => {
  return (
    <div>
      <h4>React is awesome!</h4>
      <p>Let´s do this {props.name}!</p>
      <p>After all you only have {props.age} years old.</p>
    </div>
  );
}

export default userOutput;