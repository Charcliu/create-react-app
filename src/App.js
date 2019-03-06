import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from 'react-router-dom'
import Welcome from './component/Welcome'
import Toggle from './component/Toggle'
import Clock from './component/Clock'
import Fragment from './component/Fragment'
import PortalsHome from './component/Portals/PortalsHome'
import Parent from './component/Portals/Example/Parent'
import Demo from './component/Advance/PropsProxy/Demo'
import test from './component/Advance/Inheritance/test'
import MouseTracker from './component/RenderProp/MouseTracker'
import Home from './component/Nested/Home'

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
              <li>
                {/* active */}
                <NavLink
                  to="/protals"
                  activeStyle={{
                    fontWeight: 'bold',
                    color: 'red'
                  }}
                >
                  Protals
                </NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/welcome" component={Welcome} />
            {/* <Route path="/toggle" component={Toggle} /> */}
            <Route path="/toggle" render={props => <Toggle {...props} />} />
            <Route path="/clock/:timeId" component={Clock} />
            <Route path="/fragment" component={Fragment} />
            <Route path="/protals" component={PortalsHome} />
            <Route path="/protals" component={Parent} />
            <Route path="/demo/test" component={test} />
            <Route path="/demo" component={Demo} />
            <Route path="/mouse" component={MouseTracker} />
            <Route path="/home" component={Home} />
            {/* 在其他路由不匹配的情况下，才会渲染重定向组件 */}
            <Redirect to="/home" />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
