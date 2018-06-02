import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
  constructor(props) {
    super(props)
    console.log('[Persons.js] init Constructor()', props)
  }

  componentWillMount() {
    console.log('[Persons.js] init componentWillMount()')
  }

  componentDidMount() {
    console.log('[Persons.js] init componentDidMount()')
  }

  componentWillReceiveProps(nextProps) {
    console.log('[UPDATE Persons.js] init componentWillReceiveProps()', nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] init componentShouldUpdate()',
      nextProps,
      nextState
    )
    return nextProps.persons !== this.props.persons
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      '[UPDATE Persons.js] init componentWillUpdate()',
      nextProps,
      nextState
    )
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('[UPDATE Persons.js] init componentDidUpdate()')
  }

  render() {
    console.log('[Persons.js] init render()')

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