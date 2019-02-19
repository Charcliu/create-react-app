import React, { Component } from 'react'
import FancyBorder from './FancyBorder'
import Dialog from './Dialog'
import './Assembly.css'

class WelcomeDialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: ''
    }
  }

  handleChange = event => {
    this.setState({ login: event.target.value })
  }

  handleSignUp = () => {
    alert(`Welcome aboard, ${this.state.login}!`)
  }

  render() {
    return (
      <div>
        <FancyBorder color="blue">
          <h1 className="Dialog-title">Welcome</h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder>
        <Dialog
          title="Welcome"
          message="Thank you for visiting our spacecraft!"
        >
          <input value={this.state.login} onChange={this.handleChange} />
          <button onClick={this.handleSignUp}>Sign Me Up!</button>
        </Dialog>
      </div>
    )
  }
}

export default WelcomeDialog
