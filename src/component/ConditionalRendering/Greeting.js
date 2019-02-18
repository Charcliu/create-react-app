import React, { Component } from 'react'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

class Greeting extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>{this.props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</div>
    )
  }
}

export default Greeting
