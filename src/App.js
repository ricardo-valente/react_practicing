import React, { Component } from 'react'
import appStyles from './App.css'
import Person from './Person/Person'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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
    const classes = []
    let persons = null
    let buttonClass = ''

    this.state.persons.length < 3
      ? classes.push(appStyles.red)
      : false
    this.state.persons.length < 2
      ? classes.push(appStyles.bold)
      : false

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                click={() => this.deletePersonsHandler(index)}
                name={person.name}
                age={person.age}
                change={event => this.changeNameHandler(event, person.id)} />
              </ErrorBoundary>
          })}
        </div>
      )
      buttonClass = appStyles.red
    }

    return (
      <div className={appStyles.App}>
        <header>
          <h1>Hi! I am a React App.</h1>
          <p className={classes.join(' ')}>coded by Ricardo Valente</p>
          <button
            className={buttonClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </header>
      </div>
    )
  }
}

export default App
