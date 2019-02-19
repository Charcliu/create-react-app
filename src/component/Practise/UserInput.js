import React, { Component } from 'react'

class UserInput extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = event => {
    this.props.handleChange(event)
  }

  render() {
    return (
      <div>
        <input
          name="searchVal"
          placeholder="Search..."
          value={this.props.searchVal}
          onChange={this.handleChange}
        />
        <br />
        <input
          type="checkbox"
          name="checkStock"
          checked={this.props.checkStock}
          onChange={this.handleChange}
        />
        Only show products in stock
      </div>
    )
  }
}

export default UserInput
