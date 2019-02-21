import React, { Component } from 'react'

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
    console.log('constructor')
  }

  componentWillMount() {
    // 其在render()之前被调用，因此在这方法里同步地设置状态将不会触发重渲染
    this.setState({
      name: 'componentWillMount'
    })
    console.log('componentWillMount', this)
  }

  componentDidMount() {
    // 在这里修改状态会重新渲染
    this.setState({
      name: 'componentDidMount'
    })
    console.log('componentDidMount', this)
  }

  componentWillReceiveProps(nextProps) {
    // this.props上次的值,nextProps新传入的值
    console.log('componentWillReceiveProps', this.props, nextProps)
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 第一个参数：最新属性对象, 第二个参数：最新状态对象
    console.log('shouldComponentUpdate', nextProps, nextState)
    // 是否重新渲染组件，返回true重新渲染，否则不渲染
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState)
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <h1>
        LifeCycle, Hello, {this.state.name},My age is {this.props.age}
      </h1>
    )
  }
}

export default LifeCycle
