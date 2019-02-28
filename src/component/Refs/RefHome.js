import React, { Component } from 'react'
import RefChild from './RefChild'

class RefHome extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.textInput = React.createRef()
  }

  componentDidMount() {
    // this.textInput为获取的RefChild对象
    this.textInput.current.focusTextInput()
  }

  render() {
    return (
      <div>
        <RefChild ref={this.textInput} />
      </div>
    )
  }
}

export default RefHome
