import React, { Component } from 'react'

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
  }

  handleClick = event => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  clickMe(name, e) {
    e.stopPropagation()
    console.log(name)
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
        <button onClick={e => this.clickMe('ChangLau', e)}>Click Me!</button>
      </div>
    )
  }
}

export default Toggle
