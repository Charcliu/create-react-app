import React, { Component } from 'react'

class MailBox extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <h1>Hello!</h1>
        {this.props.unreadMessages && (
          <h2>You have {this.props.unreadMessages.length} unread messages.</h2>
        )}
      </div>
    )
  }
}

export default MailBox
