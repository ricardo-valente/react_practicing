import React, { Component } from 'react'

const validation = value => {
  return value.length > 5
    ? 'Text long enough'
    : 'Text too short'
}

const validator = props => (
  <p>{validation(props.inputLength)}</p>
)

export default validator