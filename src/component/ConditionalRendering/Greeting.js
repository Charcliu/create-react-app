import React, { Component } from 'react'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    if (this.props.isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }
}

export default Greeting
