import React, { Component } from 'react'

class Child1 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <button onClick={this.props.refresh}>更新兄弟组件</button>
      </div>
    )
  }
}

export default Child1
