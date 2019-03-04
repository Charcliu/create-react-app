import React, { Component } from 'react'

export default function WithHeader(WrappedComponent) {
  return class HOC extends Component {
    render() {
      return (
        <div>
          <div className="demo-header">我是标题</div>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}
