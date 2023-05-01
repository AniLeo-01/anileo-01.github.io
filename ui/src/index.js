import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Publications from './views/publications'
import Gallery2 from './views/gallery2'
import ContactMe from './views/contact-me'
import Gallery1 from './views/gallery1'
import Home from './views/home'
import Introduction from './views/introduction'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Publications} exact path="/publications" />
        <Route component={Gallery2} exact path="/gallery2" />
        <Route component={ContactMe} exact path="/contact-me" />
        <Route component={Gallery1} exact path="/gallery1" />
        <Route component={Home} exact path="/" />
        <Route component={Introduction} exact path="/introduction" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
