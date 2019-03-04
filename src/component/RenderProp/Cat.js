import React, { Component } from 'react'

class Cat extends Component {
  render() {
    const mouse = this.props.mouse
    return (
      <div
        className="cat"
        style={{
          left: mouse.x,
          top: mouse.y
        }}
      />
    )
  }
}

export default Cat
