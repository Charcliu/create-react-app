import React, { Component } from 'react'
import Name from './Name'
import Age from './Age'

// 嵌套组件
class Home extends Component {
  render() {
    return (
      <div>
        <Name name="ChangLau" />
        <Age age="25" />
      </div>
    )
  }
}

export default Home
