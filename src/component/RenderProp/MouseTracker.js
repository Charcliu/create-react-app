import React, { Component } from 'react'
import Mouse from './Mouse'
import Cat from './Cat'
import './RenderProp.css'

class MouseTracker extends Component {
  render() {
    return (
      <div className="rootDiv">
        <h1>Move the mouse around!</h1>
        <Mouse
          children={mouse => (
            <p>
              The mouse position is {mouse.x}, {mouse.y}
            </p>
          )}
          render={mouse => <Cat mouse={mouse} />}
        />
      </div>
    )
  }
}

export default MouseTracker
