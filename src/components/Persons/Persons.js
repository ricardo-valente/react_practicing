import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {

  render() {
    return this.props.persons.map((person, index) => (
      <Person
        click={() => this.props.onClick(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        change={event => this.props.onChange(event, person.id)} />
      )
    )
  }
}

export default Persons