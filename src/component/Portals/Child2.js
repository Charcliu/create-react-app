import React, { Component } from 'react'
import './Child2.css'

class Child2 extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        <div className="shadow">
          <input
            type="button"
            value="hideShadow"
            onClick={this.props.hideShadow}
          />
        </div>
      </>
    )
  }
}

export default Child2
