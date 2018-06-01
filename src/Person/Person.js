import React from 'react'
import personStyles from './Person.css'

const person = props => {
  const rnd = Math.random()
  if (rnd < 0.5) {
    throw new Error('Something went wrong!')
  }
  return (
    <div className={personStyles.person}>
      <h3 onClick={props.click}>I am {props.name} and I am {props.age} years old!</h3>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  )
}

export default person