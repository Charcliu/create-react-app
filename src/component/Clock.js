import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    // 唯一初始化state的地方
    this.state = { date: new Date() }
    this.showTime = this.showTime.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
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
    // 返回上一级
    this.props.history.go(-1)
  }

  render() {
    return (
      <div onClick={this.showTime}>
        Time is {this.state.date.toLocaleTimeString()}
        <h1>{this.props.match.params.timeId}</h1>
      </div>
    )
  }
}

export default Clock
