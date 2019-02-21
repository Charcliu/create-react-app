import React, { Component } from 'react'

class Child2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <div>{this.props.text || '兄弟组件未更新'}</div>
  }
}

export default Child2
