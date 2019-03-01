import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Welcome from './component/Welcome'
import Toggle from './component/Toggle'
import Clock from './component/Clock'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/welcome">Welcome</Link>
              </li>
              <li>
                <Link to="/toggle">Toggle</Link>
              </li>
              <li>
                <Link to="/clock/123">Clock</Link>
              </li>
            </ul>
          </nav>
          <Route path="/welcome" component={Welcome} />
          <Route path="/toggle" component={Toggle} />
          <Route path="/clock/:timeId" component={Clock} />
        </div>
      </Router>
    )
  }
}

export default App
