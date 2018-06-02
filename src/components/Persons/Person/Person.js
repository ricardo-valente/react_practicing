import React, { Component } from 'react'
import personStyles from './Person.css'

class Person extends Component {
  render() {
    return (
      <div className={personStyles.person}>
        <h3 onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</h3>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change} value={this.props.name} />
      </div>
    )
  }
}

export default Person