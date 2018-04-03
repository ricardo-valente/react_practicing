import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Ricardo', age: '31' },
      { name: 'João', age: '25' },
      { name: 'Laurentino', age: '28' }
    ],
    otherState: 'some other name',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonsHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: '31' },
        { name: 'João', age: '30' },
        { name: 'Farnando', age: '28' }
      ],
    });
  }

  render() {
    const buttonStyle = {
      padding: '10px 25px',
      color: '#444',
      border: '2px solid #444',
      borderRadius: '5px'
    }

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonsHandler}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <header>
          <h1>Hi! I am a React App.</h1>
          <p>coded by Ricardo Valente</p>
          <button style={buttonStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </header>
      </div>
    );
  }
}

export default App;
