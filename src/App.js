import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Hi! I am a React App.</h1>
          <p>coded by Ricardo Valente</p>
          <Person name="Ricardo" age="31">My interest: crossfit, ping pong & coding</Person>
          <Person name="João" age="25" />
          <Person name="Laurentino" age="28" />
        </header>
      </div>
    );
  }
}

export default App;
