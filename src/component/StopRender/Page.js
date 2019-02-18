import React, { Component } from 'react'
import ChangLau from './ChangLau'

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = { show: false }
  }

  toggleState = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }

  render() {
    return (
      <div>
        <ChangLau show={this.state.show} />
        <button onClick={this.toggleState}>Toggle ChangLau</button>
      </div>
    )
  }
}

export default Page
