import React, { Component } from 'react'
import NumberList from './NumberList'

class ListHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }

  changeList = () => {
    this.setState(prevState => ({
      numbers: prevState.numbers.map(item => item * 2)
    }))
  }

  render() {
    return (
      <div>
        <NumberList numbers={this.state.numbers} />
        <button onClick={this.changeList}>Change</button>
      </div>
    )
  }
}

export default ListHome
