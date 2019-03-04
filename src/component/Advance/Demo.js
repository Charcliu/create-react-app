import React, { Component } from 'react'
import WithHeader from './WithHeader'

@WithHeader
class Demo extends Component {
  render() {
    return <div>我是一个普通组件</div>
  }
}

// const EnhanceDemo = WithHeader(Demo)

export default Demo
