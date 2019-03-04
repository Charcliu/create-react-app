import React, { Component } from 'react'
import IIHOC from './IIHOC'

@IIHOC
class test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      a: 1
    }
  }

  render() {
    return <h1>test</h1>
  }
}

export default test
