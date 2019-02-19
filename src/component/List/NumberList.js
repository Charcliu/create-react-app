import React, { Component } from 'react'

class NumberList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ul>
        {this.props.numbers.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    )
  }
}

export default NumberList
