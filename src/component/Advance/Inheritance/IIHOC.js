import React from 'react'

export default function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      console.log(this.props, this.state)
      if (this.props.test) {
        return super.render()
      } else {
        return <h1>{this.state.a}</h1>
      }
    }
  }
}
