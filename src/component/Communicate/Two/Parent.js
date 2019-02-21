import React, { Component } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  refresh = () => {
    this.setState({
      text: '兄弟组件沟通成功'
    })
  }
  render() {
    return (
      <div>
        <h2>兄弟组件沟通</h2>
        <Child1 refresh={this.refresh} />
        <Child2 text={this.state.text} />
      </div>
    )
  }
}

export default Parent
