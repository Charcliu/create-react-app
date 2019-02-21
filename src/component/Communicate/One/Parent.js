import React, { Component } from 'react'
import Child from './Child'

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  refreshChild = () => {
    this.setState({
      childText: '父组件沟通子组件成功'
    })
  }

  refreshParent = () => {
    this.setState({
      parentText: '子组件沟通父组件成功'
    })
  }

  render() {
    return (
      <div>
        <h1>父子组件沟通</h1>
        <button onClick={this.refreshChild}>更新子组件</button>
        <Child
          text={this.state.childText || '子组件未更新'}
          refreshParent={this.refreshParent}
        />
        {this.state.parentText || '父组件未更新'}
      </div>
    )
  }
}

export default Parent
