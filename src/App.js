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
          <Person />
        </header>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Ricardo Valente'));
  }
}

export default App;
