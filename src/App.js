import React, { Component } from 'react'
import { Route, Link, NavLink } from 'react-router-dom'
import Welcome from './component/Welcome'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <NavLink to="/welcome">Welcome</NavLink>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
        </ul>
        <Route strict path="/welcome" component={Welcome} />
      </div>
    )
  }
}

export default App
