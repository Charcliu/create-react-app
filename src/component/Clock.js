import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    // 唯一初始化state的地方
    this.state = { date: new Date() }
    this.showTime = this.showTime.bind(this)
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    // 通过setState方法更新状态
    this.setState({
      date: new Date()
    })
  }

  showTime(e) {
    alert(this.state.date.toLocaleTimeString())
  }

  render() {
    return (
      <div onClick={this.showTime}>
        Time is {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default Clock
