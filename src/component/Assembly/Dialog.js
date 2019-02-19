import React, { Component } from 'react'
import FancyBorder from './FancyBorder'

class Dialog extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <FancyBorder>
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
        {this.props.children}
      </FancyBorder>
    )
  }
}

export default Dialog
