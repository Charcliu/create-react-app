import React, { Component } from 'react'
import RefChild from './RefChild'

class RefHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textValue: ''
    }
    this.textInput = React.createRef()
  }

  componentDidMount() {
    // this.textInput为获取的RefChild对象
    this.textInput.current.focusTextInput()
  }

  innerRef = event => {
    alert(
      'A name was submitted: ' +
        this.input.value +
        ' ' +
        this.fileInput.value +
        ' ' +
        this.state.textValue
    )
    event.preventDefault()
  }

  handleChange = event => {
    this.setState({
      textValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <label>非受控组件：</label>
        {/* 表单组件由DOM处理 */}
        <input type="text" ref={input => (this.input = input)} />
        <input
          type="file"
          ref={input => {
            this.fileInput = input
          }}
        />
        <label>受控组件：</label>
        {/* 表单数据由React处理 */}
        <input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
        />
        <input type="button" value="Click Me!" onClick={this.innerRef} />
        <RefChild ref={this.textInput} />
      </div>
    )
  }
}

export default RefHome
