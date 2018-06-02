import React, { Component } from 'react'
import appStyles from './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../cockpit/Cockpit'

class App extends Component {

  state = {
    persons: [
      { id: 'fd62fd', name: 'Ricardo', age: '31' },
      { id: '23sw2h', name: 'João', age: '25' },
      { id: '965j6y', name: 'Laurentino', age: '28' }
    ],
    otherState: 'some other name',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  render() {

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            onClick={this.deletePersonsHandler}
            onChange={this.changeNameHandler} />
        </div>
      )
    }

    return (
      <div className={appStyles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          onClick={this.togglePersonsHandler} />
        {persons}
      </div>
    )
  }
}

export default App