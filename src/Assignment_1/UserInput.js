import React from 'react';
import './UserInputStyles/UserInputStyles.css';

const userInput = props => <input className="userInput" type="text" onChange={props.change} value={props.initialState} />

export default userInput;