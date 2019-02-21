import React, { Component } from 'react'

// 组件传参
class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'ChangLau'
    }
    // 创建 ref 存储 textInput DOM 元素
    this.textInput = React.createRef()
  }

  handleClick = event => {
    console.log(event)
    // 路由跳转
    this.props.history.push('/clock/' + 123)
  }

  focusTextInput = param => {
    // 直接使用原生 API 使 text 输入框获得焦点
    // 注意：通过 "current" 取得 DOM 节点
    this.textInput.current.focus()
    this.textInput.current.value = param
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <input type="text" ref={this.textInput} />
        <input type="button" value="React事件绑定" onClick={this.handleClick} />
        <input
          type="button"
          value="JS原生绑定"
          onClick={() => {
            this.focusTextInput(this.state.name)
          }}
        />
        <br />
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Welcome
