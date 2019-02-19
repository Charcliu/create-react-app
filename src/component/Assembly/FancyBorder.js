import React, { Component } from 'react'

class FancyBorder extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className={'FancyBorder FancyBorder-' + this.props.color}>
        {this.props.children}
      </div>
    )
  }
}

export default FancyBorder
