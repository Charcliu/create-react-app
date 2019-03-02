import React, { Component } from 'react'
import { Button, DatePicker, Tabs } from 'antd'
import Home from './Comment/Home'
const { RangePicker } = DatePicker
const TabPane = Tabs.TabPane

class Toggle extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }
  }

  handleClick = event => {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  clickMe(name, e) {
    e.stopPropagation()
    console.log(name)
  }

  onChange = (date, dateString) => {
    console.log(date, dateString)
  }

  callback = key => {
    console.log(key)
  }

  render() {
    return (
      <>
        <div onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
          <button onClick={e => this.clickMe('ChangLau', e)}>Click Me!</button>
        </div>
        <Button type="primary">Primary</Button>
        <RangePicker onChange={this.onChange} />
        <Tabs onChange={this.callback} type="card">
          <TabPane tab="Tab 1" key="1">
            <Home />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </>
    )
  }
}

export default Toggle
