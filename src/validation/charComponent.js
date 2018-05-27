import React, { Component } from 'react'
import './Char.css';

const charBox = props => (
  <div id={props.id} className="char__box" onClick={props.clickEvent}>
    <h2>{props.char}</h2>
  </div>
)

export default charBox