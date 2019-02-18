import React, { Component } from 'react'

class Name extends Component {
  render() {
    return <div>name is {formatName(this.props.name)}</div>
  }
}

function formatName(name) {
  return name.toUpperCase()
}

export default Name
