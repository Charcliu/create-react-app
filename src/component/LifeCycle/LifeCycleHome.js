import React, { Component } from 'react'
import LifeCycle from './LifeCycle'

class LifeCycleHome extends Component {
  constructor(props) {
    super(props)
    this.state = { age: '' }
  }

  componentDidMount() {
    this.delay()
  }

  delay() {
    setTimeout(() => {
      this.setState({
        age: 25
      })
    }, 1000)
  }

  render() {
    return <LifeCycle age={this.state.age} />
  }
}

export default LifeCycleHome
