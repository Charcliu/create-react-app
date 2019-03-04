import React, { Component } from 'react'
import WithHeader from './WithHeader'
import Test from '../Inheritance/test'

@WithHeader
class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        我是一个普通组件 {this.props.data} <Test test="myTest" />
      </div>
    )
  }
}

// const EnhanceDemo = WithHeader(Demo)

export default Demo
