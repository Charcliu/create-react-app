import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import * as serviceWorker from './serviceWorker'

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import RouterDom from './router/router'

ReactDOM.render(<RouterDom />, document.getElementById('root'))

// ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

// const element = (
//   <div>
//     <Welcome name="Sara" />
//     <Welcome name="Cahal" />
//     <Welcome name="Edite" />
//   </div>
// )

// ReactDOM.render(element, document.getElementById('welcome'))
// ReactDOM.render(<Home />, document.getElementById('info'))
// ReactDOM.render(<Clock />, document.getElementById('clock'))
// ReactDOM.render(<Toggle />, document.getElementById('toggle'))
// ReactDOM.render(<LoginControl />, document.getElementById('loginControl'))

// const messages = ['React', 'Re: React', 'Re:Re: React']
// ReactDOM.render(
//   <MailBox unreadMessages={messages} />,
//   document.getElementById('mailBox')
// )

// ReactDOM.render(<Page />, document.getElementById('changlau'))
// ReactDOM.render(<ListHome />, document.getElementById('numberList'))
// ReactDOM.render(<NameForm />, document.getElementById('form'))
// ReactDOM.render(<Calculator />, document.getElementById('stateUp'))
// ReactDOM.render(<WelcomeDialog />, document.getElementById('assembly'))
// ReactDOM.render(<Main />, document.getElementById('practise'))
