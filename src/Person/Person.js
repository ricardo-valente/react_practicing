import React from 'react'
import './Person.css'
import Radium from 'radium'

const person = props => {
  const style = {
    '@media(min-width: 768px)': {
      width: '500px'
    }
  }
  return (
    <div className="person" style={ style }>
      <h3 onClick={props.click}>I am {props.name} and I am {props.age} years old!</h3>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} value={props.name} />
    </div>
  )
}

export default Radium(person)