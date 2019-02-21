import React, { Component } from 'react'
import { Link ,NavLink} from 'react-router-dom'
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
        {this.props.children}
      </div>
    )
  }
}

export default App
