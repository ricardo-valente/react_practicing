import React from 'react'
import cockpitStyles from './Cockpit.css'

const cockpit = props => {

  const classes = []
  let buttonClass = ''

  props.persons.length < 3
    ? classes.push(cockpitStyles.red)
    : false
  props.persons.length < 2
    ? classes.push(cockpitStyles.bold)
    : false

  if (props.showPersons) {
    buttonClass = cockpitStyles.red
  }

  return (
    <header className={cockpitStyles.Cockpit}>
      <h1>Hi! I am a React App.</h1>
      <p className={classes.join(' ')}>coded by Ricardo Valente</p>
      <button
        className={buttonClass}
        onClick={props.onClick}>Toggle Persons</button>
    </header>
  )
}

export default cockpit