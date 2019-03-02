import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return <>{this.props.children}</>
  }
}

export default Child
