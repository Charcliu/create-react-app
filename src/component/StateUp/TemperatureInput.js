import React, { Component } from 'react'

class TemperatureInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scaleNames: {
        c: 'Celsius',
        f: 'Fahrenheit'
      }
    }
  }

  handleChange = event => {
    this.props.onTemperatureChange(event.target.value)
  }

  render() {
    return (
      <fieldset>
        <legend>
          Enter temperature in {this.state.scaleNames[this.props.scale]}:
        </legend>
        <input value={this.props.temperature} onChange={this.handleChange} />
      </fieldset>
    )
  }
}

export default TemperatureInput
