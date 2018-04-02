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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '31' },
        { name: 'João', age: '30' },
        { name: 'Farnando', age: '28' }
      ],
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
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
    return (
      <div className="App">
        <header>
          <h1>Hi! I am a React App.</h1>
          <p>coded by Ricardo Valente</p>
          <button style={buttonStyle} onClick={this.togglePersonsHandler}>Switch Name</button>
          { this.state.showPersons ?
            <div>
              <Person
                name={this.state.persons[0].name}
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'Richardo')}
                change={this.changeNameHandler}>
                My interest: crossfit, ping pong & coding
              </Person>
              <Person
                name={this.state.persons[1].name}
                age={this.state.persons[1].age} />
              <Person
                name={this.state.persons[2].name}
                age={this.state.persons[2].age} />
            </div> : null
          }
        </header>
      </div>
    );
  }
}

export default App;
