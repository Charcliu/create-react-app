import React, { Component } from 'react'
import UserInput from './UserInput'
import Table from './Table'
import './Practise.css'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchVal: '',
      checkStock: false,
      data: [
        {
          category: 'Sporting Goods',
          price: '$49.99',
          stocked: true,
          name: 'Football'
        },
        {
          category: 'Sporting Goods',
          price: '$9.99',
          stocked: true,
          name: 'Baseball'
        },
        {
          category: 'Sporting Goods',
          price: '$29.99',
          stocked: false,
          name: 'Basketball'
        },
        {
          category: 'Electronics',
          price: '$99.99',
          stocked: true,
          name: 'iPod Touch'
        },
        {
          category: 'Electronics',
          price: '$399.99',
          stocked: false,
          name: 'iPhone 5'
        },
        {
          category: 'Electronics',
          price: '$199.99',
          stocked: true,
          name: 'Nexus 7'
        }
      ]
    }
  }

  handleChange = param => {
    const name = param.target.name
    let value
    name === 'checkStock'
      ? (value = param.target.checked)
      : (value = param.target.value)
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="main">
        <UserInput
          searchVal={this.state.searchVal}
          checkStock={this.state.checkStock}
          handleChange={this.handleChange}
        />
        <Table
          searchVal={this.state.searchVal}
          checkStock={this.state.checkStock}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default Main
