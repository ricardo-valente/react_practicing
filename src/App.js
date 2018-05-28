import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

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
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
    const buttonStyle = {
      padding: '10px 25px',
      color: 'green',
      border: '2px solid green',
      borderRadius: '5px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'darkgreen',
        borderColor: 'darkgreen'
      }
    }

    const classes = []
    this.state.persons.length < 3
      ? classes.push('red')
      : false
    this.state.persons.length < 2
      ? classes.push('bold')
      : false

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              change={event => this.changeNameHandler(event, person.id)} />
          })}
        </div>
      );
      buttonStyle.color = 'red'
      buttonStyle.borderColor = 'red'
      buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'darkred',
        borderColor: 'darkred'
      }
    }

    return (
      <div className="App">
        <header>
          <h1>Hi! I am a React App.</h1>
          <p className={classes.join(' ')}>coded by Ricardo Valente</p>
          <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </header>
      </div>
    );
  }
}

export default Radium(App);
