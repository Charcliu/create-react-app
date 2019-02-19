import React, { Component } from 'react'
import ProductRow from './ProductRow'
import ProductCategoryRow from './ProductCategoryRow'

class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    var rows = []
    var lastCategory = null
    console.log(this.props.checkStock)
    this.props.data.forEach(product => {
      if (
        product.name.indexOf(this.props.searchVal) === -1 ||
        (!product.stocked && this.props.checkStock)
      ) {
        return
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        )
      }
      rows.push(<ProductRow product={product} key={product.name} />)
      lastCategory = product.category
    })
    this.props.data.forEach(element => {})
    return (
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Price</td>
          </tr>
          {rows}
        </tbody>
      </table>
    )
  }
}

export default Table
