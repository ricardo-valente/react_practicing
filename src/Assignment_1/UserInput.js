import React from 'react';

const userInput = props => <input type="text" onChange={props.change} value={props.initialState} />

export default userInput;