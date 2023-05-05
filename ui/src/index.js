import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Publications from './views/publications'
import experience_page2 from './views/experience_page2'
import ContactMe from './views/contact-me'
import experience_page1 from './views/experience_page1'
import Home from './views/home'
import Introduction from './views/introduction'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Publications} exact path="/publications" />
        <Route component={experience_page2} exact path="/experience_page2" />
        <Route component={ContactMe} exact path="/contact-me" />
        <Route component={experience_page1} exact path="/experience_page1" />
        <Route component={Home} exact path="/" />
        <Route component={Introduction} exact path="/introduction" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
