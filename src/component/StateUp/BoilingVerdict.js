import React, { Component } from 'react'

class BoilingVerdict extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return this.props.celsius >= 100 ? <p>水会烧开</p> : <p>水不会烧开</p>
  }
}

export default BoilingVerdict
