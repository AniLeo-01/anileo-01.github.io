import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>My Portfolio</title>
        <meta property="og:title" content="My Portfolio" />
      </Helmet>
      <div className="home-hero">
        <div className="home-container1">
          <h1 className="home-text">
            <span>Hello!</span>
            <br></br>
            <span>I am Aniruddha</span>
            <br></br>
          </h1>
          <span className="home-text5">
            <span>
              Researcher by heart, developing applications for AI and Data
              Science with high performance and scalability
            </span>
            <br></br>
          </span>
          <div className="home-btn-group">
            <Link to="/contact-me" className="home-navlink button">
              Reach out
            </Link>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1589254066007-898d52d910d3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDc1fHxyb2JvdHxlbnwwfHx8fDE2ODI4NzMwMjg&amp;ixlib=rb-4.0.3&amp;h=1500"
          className="home-image"
        />
      </div>
      <svg viewBox="0 0 658.2857142857142 1024" className="home-icon">
        <path d="M614.286 493.714c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143zM614.286 274.286c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
      </svg>
    </div>
  )
}

export default Home
