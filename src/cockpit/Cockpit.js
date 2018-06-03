import React from 'react'
import cockpitStyles from './Cockpit.css'
import Util from '../hoc/Util'

const cockpit = props => {

  const classes = []
  let buttonClass = cockpitStyles.button

  props.persons.length < 3
    ? classes.push(cockpitStyles.red)
    : false
  props.persons.length < 2
    ? classes.push(cockpitStyles.bold)
    : false

  if (props.showPersons) {
    buttonClass = [cockpitStyles.button, cockpitStyles.red].join(' ')
  }

  return (
    <Util>
      <h1>Hi! I am {props.appName}.</h1>
      <p className={classes.join(' ')}>coded by {props.appAuthor}</p>
      <button
        className={buttonClass}
        onClick={props.onClick}>Toggle Persons</button>
    </Util>
  )
}

export default cockpit