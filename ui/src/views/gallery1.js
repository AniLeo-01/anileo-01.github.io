import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import './gallery1.css'

const Gallery1 = (props) => {
  return (
    <div className="gallery1-container">
      <Helmet>
        <title>Gallery1 - My Portfolio</title>
        <meta property="og:title" content="Gallery1 - My Portfolio" />
      </Helmet>
      <header data-role="Header" className="gallery1-header">
        <div data-role="MobileMenu" className="gallery1-mobile-menu">
          <nav className="gallery1-nav">
            <div className="gallery1-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="gallery1-image"
              />
              <div
                data-role="CloseMobileMenu"
                className="gallery1-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="gallery1-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks1 rootClassName="rootClassName9"></NavigationLinks1>
          </nav>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="gallery1-icon02"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="gallery1-icon04"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="gallery1-icon06"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <Link to="/" className="gallery1-navlink">
          Aniruddha Mandal
        </Link>
        <a
          href="https://www.instagram.com/ani_leo1/"
          target="_blank"
          rel="noreferrer noopener"
          className="gallery1-link"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/aniruddha-mandal-b81490188/"
          target="_blank"
          rel="noreferrer noopener"
          className="gallery1-link1"
        >
          linkedIn
        </a>
        <a
          href="https://github.com/AniLeo-01"
          target="_blank"
          rel="noreferrer noopener"
          className="gallery1-link2"
        >
          gitHub
        </a>
        <Link to="/contact-me" className="gallery1-navlink1">
          Contact Me
        </Link>
      </header>
      <div className="gallery1-blog">
        <div className="gallery1-container02">
          <div className="gallery1-blog-post-card">
            <img
              alt="image"
              src="/playground_assets/faarms-1400w.jpg"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="gallery1-image1"
            />
            <div className="gallery1-container03">
              <div className="gallery1-container04">
                <span className="gallery1-text">Faarms</span>
                <span className="gallery1-text01">3 months</span>
                <span className="gallery1-text02">
                  January 2023 - April 2023
                </span>
              </div>
              <h1 className="gallery1-text03">Python Intern</h1>
              <span className="gallery1-text04">
                <span>
                  Developed and built microservices using FastAPI framework and
                  managed Postgres database. 
                </span>
                <br></br>
                <span>
                  Redefined the access rights of the application system by
                  integrating new user roles and resources in the IAM service.
                </span>
                <br></br>
                <span>Helped to build systems for Faarms Canada.</span>
                <br></br>
              </span>
              <div className="gallery1-container05">
                <div className="gallery1-profile">
                  <span className="gallery1-text11">
                    Bengaluru, Karnataka, India
                  </span>
                </div>
                <a
                  href="https://faarms.in/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gallery1-link3"
                >
                  Go to website-&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery1-container06">
          <div className="gallery1-blog-post-card1">
            <img
              alt="image"
              src="/playground_assets/untitled%20design%20%5B1%5D-1400w.png"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="gallery1-image2"
            />
            <div className="gallery1-container07">
              <div className="gallery1-container08">
                <span className="gallery1-text12">
                  Omdena in partnership with mycover.ai
                </span>
                <span className="gallery1-text13">
                  January 2023 - April 2023
                </span>
              </div>
              <h1 className="gallery1-text14">Machine Learning Engineer</h1>
              <span className="gallery1-text15">
                Built dashboard for pricing and backend architecture using
                FastAPI and Postgresql and used segmentation models to analyze
                car damage for the insurance company, MyCover.ai to understand
                and insure vehicles more effectively.
              </span>
              <div className="gallery1-container09">
                <div className="gallery1-profile1">
                  <span className="gallery1-text16">Remote</span>
                </div>
                <a
                  href="https://www.mycover.ai/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gallery1-link4"
                >
                  Go to website-&gt;
                </a>
              </div>
              <span className="gallery1-text17">3 months</span>
            </div>
          </div>
        </div>
        <div className="gallery1-blog-post-card2">
          <img
            alt="image"
            src="/playground_assets/praxis_auto_x2_colored_toned_light_ai-1400w.jpg"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="gallery1-image3"
          />
          <div className="gallery1-container10">
            <div className="gallery1-container11">
              <span className="gallery1-text18">Praxis Business School</span>
              <span className="gallery1-text19">May 2022 - August 2022</span>
            </div>
            <span className="gallery1-text20">4 months</span>
            <div className="gallery1-container12">
              <h1 className="gallery1-text21">Research Intern</h1>
            </div>
            <span className="gallery1-text22">
              <span>
                Analyzed the stock market data for 5 stocks and performed
                exploratory data analysis and feature engineering.
              </span>
              <br></br>
              <span>
                {' '}
                Designed and benchmarked 2 statistical models, 9 machine
                learning models, and 2 deep learning models with variants of
                LSTMs and finetuned hyperparameters.
              </span>
            </span>
            <div className="gallery1-container13">
              <div className="gallery1-profile2">
                <span className="gallery1-text26">
                  Samali, West Bengal, India
                </span>
              </div>
              <a
                href="https://praxis.ac.in/"
                target="_blank"
                rel="noreferrer noopener"
                className="gallery1-link5"
              >
                Go to website-&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
      <Link to="/gallery2" className="gallery1-navlink2">
        <footer className="gallery1-footer">
          <span className="gallery1-text27">Click to continue</span>
          <svg viewBox="0 0 658.2857142857142 1024" className="gallery1-icon08">
            <path d="M614.286 493.714c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143zM614.286 274.286c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
          </svg>
        </footer>
      </Link>
    </div>
  )
}

export default Gallery1
