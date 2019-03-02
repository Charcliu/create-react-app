import React, { Component } from 'react'
import Modal from './Modal'
import Child from './Child'
import ErrorBoundary from './ErrorBoundary'

// 通过 Portals 进行事件冒泡

class Parent extends Component {
  constructor(props) {
    super(props)
    this.state = { clicks: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM.
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }))
  }

  render() {
    return (
      <>
        <div onClick={this.handleClick}>
          <p>Number of clicks: {this.state.clicks}</p>
          <p>
            Open up the browser DevTools to observe that the button is not a
            child of the div with the onClick handler.
          </p>
          {/* 错误边界 */}
          <ErrorBoundary>
            <Modal>
              <h1>Hello, Protals</h1>
              <Child />
            </Modal>
          </ErrorBoundary>
        </div>
      </>
    )
  }
}

export default Parent
