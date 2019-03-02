import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Welcome from './component/Welcome'
import Toggle from './component/Toggle'
import Clock from './component/Clock'
import Fragment from './component/Fragment'
import PortalsHome from './component/Portals/PortalsHome'
import Parent from './component/Portals/Example/Parent'

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
              <li>
                <Link to="/fragment">Fragment</Link>
              </li>
            </ul>
          </nav>
          <Route path="/welcome" component={Welcome} />
          <Route path="/toggle" component={Toggle} />
          <Route path="/clock/:timeId" component={Clock} />
          <Route path="/fragment" component={Fragment} />
          <Route path="/protals" component={PortalsHome} />
          <Route path="/protals" component={Parent} />
        </div>
      </Router>
    )
  }
}

export default App
