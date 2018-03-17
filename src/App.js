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
    otherState: 'some other name'
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

  render() {
    return (
      <div className="App">
        <header>
          <h1>Hi! I am a React App.</h1>
          <p>coded by Ricardo Valente</p>
          <button onClick={this.switchNameHandler.bind(this, 'Valente')}>Switch Name</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Richardo')}>
            My interest: crossfit, ping pong & coding
          </Person>
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </header>
      </div>
    );
  }
}

export default App;
