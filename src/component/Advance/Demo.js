import React, { Component } from 'react'
import withHeader from './WithHeader'

@withHeader
class Demo extends Component {
  render() {
    return <div>我是一个普通组件</div>
  }
}

// const EnhanceDemo = WithHeader(Demo)

export default Demo
