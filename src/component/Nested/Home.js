import React, { Component } from 'react'
import User from './Child/User'
import Consume from './Child/Consume'
import { Route, Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <>
        <div className="header">
          Header
          <ul>
            <li>
              <Link to={`${this.props.match.url}/user`}>User</Link>
            </li>
            <li>
              <Link to={`${this.props.match.url}/consume`}>Consume</Link>
            </li>
          </ul>
        </div>
        <div className="contain">
          {this.props.match.url}
          <Route path={`${this.props.match.path}/user`} component={User} />
          <Route
            path={`${this.props.match.path}/consume`}
            component={Consume}
          />
        </div>
        <div className="footer">Footer</div>
      </>
    )
  }
}

export default Home
