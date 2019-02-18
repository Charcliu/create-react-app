import React, { Component } from 'react'

class ChangLau extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        {this.props.show ? null : (
          <div className="changlau">Hello Changlau</div>
        )}
      </div>
    )
  }
}

export default ChangLau
