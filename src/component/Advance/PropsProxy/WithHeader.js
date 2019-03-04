import React, { Component } from 'react'

function getDisplayName(component) {
  return component.displayName || component.name || 'Component'
}

export default function WithHeader(WrappedComponent) {
  return class HOC extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: ''
      }
    }
    // 设置高阶组件名称
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`

    componentWillMount() {
      this.setState({
        data: 'Fluently'
      })
    }

    render() {
      return (
        <div>
          <div className="demo-header">我是标题</div>
          <WrappedComponent {...this.props} data={this.state.data} />
        </div>
      )
    }
  }
}
