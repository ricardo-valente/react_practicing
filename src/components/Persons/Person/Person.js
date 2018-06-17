import React, { Component } from 'react'
import personStyles from './Person.css'
import Util from '../../../hoc/Util'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'

class Person extends Component {
  constructor(props) {
    super(props)
    console.log('[Person.js] init Constructor()', props)
    this.inputElem = React.createRef()
  }

  componentWillMount() {
    console.log('[Person.js] init componentWillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] init componentDidMount()')
    if (this.props.index === 0) {
      this.inputElem.current.focus()
    }
  }

  render() {
    console.log('[Person.js] init render()')
    return (
      <Util>
        <h3 onClick={this.props.click}>I am {this.props.name} and I am {this.props.age} years old!</h3>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElem}
          type="text"
          onChange={this.props.change}
          value={this.props.name} />
      </Util>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
}

export default withClass(Person, personStyles.person)