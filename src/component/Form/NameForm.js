import React, { Component } from 'react'

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      text: 'Please write an essay about your favorite DOM element.',
      selected: 'coconut'
    }
  }

  handleChange = event => {
    // 多个受控组件赋值
    const key = event.target.name
    this.setState({
      [key]: event.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Text:
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Pick your favorite La Croix flavor:
          <select
            name="selected"
            value={this.state.selected}
            onChange={this.handleChange}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </div>
    )
  }
}

export default NameForm
