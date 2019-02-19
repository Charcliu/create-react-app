import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

class Calculator extends Component {
  constructor(props) {
    super(props)
    this.state = { temperature: '', scale: 'c' }
  }

  handleCelsiusChange = temperature => {
    this.setState({ scale: 'c', temperature })
  }

  handleFahrenheitChange = temperature => {
    this.setState({ scale: 'f', temperature })
  }

  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature)
    if (Number.isNaN(input)) {
      return ''
    }
    const output = convert(input)
    const rounded = Math.round(output * 1000) / 1000
    return rounded.toString()
  }

  toCelsius = fahrenheit => {
    return ((fahrenheit - 32) * 5) / 9
  }

  toFahrenheit = celsius => {
    return (celsius * 9) / 5 + 32
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature
    const fahrenheit =
      scale === 'c'
        ? this.tryConvert(temperature, this.toFahrenheit)
        : temperature
    return (
      <fieldset>
        <TemperatureInput
          temperature={celsius}
          scale="c"
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          temperature={fahrenheit}
          scale="f"
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingVerdict celsius={parseFloat(this.state.temperature)} />
      </fieldset>
    )
  }
}

export default Calculator
