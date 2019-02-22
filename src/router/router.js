import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import App from '../App'
import Welcome from '../component/Welcome'
import Home from '../component/Comment/Home'
import Clock from '../component/Clock'
import Toggle from '../component/Toggle'
import LifeCycleHome from '../component/LifeCycle/LifeCycleHome'
import Parent from '../component/Communicate/One/Parent'
import Parent2 from '../component/Communicate/Two/Parent'

// import LoginControl from './component/ConditionalRendering/LoginControl'
// import MailBox from './component/MailBox'
// import Page from './component/StopRender/Page'
// import ListHome from './component/List/ListHome'
// import NameForm from './component/Form/NameForm'
// import Calculator from './component/StateUp/Calculator'
// import WelcomeDialog from './component/Assembly/WelcomeDialog'
// import Main from './component/Practise/Main'

class RouterDom extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Switch> */}

          <Route path="/" component={App} />
          <Route strict path="/welcome" component={Welcome} />
          <Route path="/home" component={Home} />
          <Route path="/clock/:timeId" component={Clock} />
          <Route path="/toggle" component={Toggle} />
          <Route path="/lifeCycle" component={LifeCycleHome} />
          <Route path="/parent" component={Parent} />
          <Route path="/parent2" component={Parent2} />
          {/* <Redirect path="/" to={{ pathname: '/xxx' }} /> */}
          {/* </Switch> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default RouterDom
