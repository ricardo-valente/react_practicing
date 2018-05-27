import React, { Component } from 'react'
import './Char.css';

const charBox = props => (
  <div className="char__box">
    <h2>{props.char}</h2>
  </div>
)

export default charBox