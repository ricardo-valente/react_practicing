import React, { Component } from 'react'

const validator = props => {
  let validationMessage = (props.inputLength > 5)
    ? 'Text long enough'
    : 'Text too short'
  return (
    <p>{validationMessage}</p>
  )
}

export default validator