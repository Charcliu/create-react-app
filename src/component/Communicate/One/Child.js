import React, { Component } from 'react'

class Child extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        {this.props.text}
        <br />
        <button onClick={this.props.refreshParent}>更新父组件</button>
      </div>
    )
  }
}

export default Child
