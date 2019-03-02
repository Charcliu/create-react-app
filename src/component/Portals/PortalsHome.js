import React, { Component } from 'react'
import Child from './Child'
import Child2 from './Child2'

class ProtalsHome extends Component {
  constructor(props) {
    super(props)
    this.state = { showShadow: false }
  }

  handleClick = () => {
    this.setState({
      showShadow: true
    })
  }

  hideShadow = () => {
    this.setState({
      showShadow: false
    })
  }

  render() {
    return (
      <>
        <Child>
          <h1>I am props children</h1>
        </Child>
        <input type="button" value="showShadow" onClick={this.handleClick} />
        {this.state.showShadow && <Child2 hideShadow={this.hideShadow} />}
      </>
    )
  }
}

export default ProtalsHome
