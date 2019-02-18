import React, { Component } from 'react'

// 组件传参
class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

export default Welcome
