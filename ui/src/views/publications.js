import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import NavigationLinks1 from '../components/navigation-links1'
import './publications.css'

const Publications = (props) => {
  return (
    <div className="publications-container">
      <Helmet>
        <title>Publications - My Portfolio</title>
        <meta property="og:title" content="Publications - My Portfolio" />
      </Helmet>
      <header data-role="Header" className="publications-header">
        <div data-role="MobileMenu" className="publications-mobile-menu">
          <nav className="publications-nav">
            <div className="publications-container01">
              <img
                alt="image"
                src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                className="publications-image"
              />
              <div
                data-role="CloseMobileMenu"
                className="publications-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="publications-icon">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks1 rootClassName="rootClassName8"></NavigationLinks1>
          </nav>
          <div>
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="publications-icon02"
            >
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg
              viewBox="0 0 877.7142857142857 1024"
              className="publications-icon04"
            >
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg
              viewBox="0 0 602.2582857142856 1024"
              className="publications-icon06"
            >
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
        <Link to="/" className="publications-navlink">
          Aniruddha Mandal
        </Link>
        <a
          href="https://www.linkedin.com/in/aniruddha-mandal-b81490188/"
          target="_blank"
          rel="noreferrer noopener"
          className="publications-link"
        >
          linkedIn
        </a>
        <a
          href="https://medium.com/@anileo"
          target="_blank"
          rel="noreferrer noopener"
          className="publications-link1"
        >
          medium
        </a>
        <a
          href="https://www.instagram.com/ani_leo1/"
          target="_blank"
          rel="noreferrer noopener"
          className="publications-link2"
        >
          Instagram
        </a>
        <Link to="/contact-me" className="publications-navlink1">
          Contact me
        </Link>
      </header>
      <div className="publications-blog">
        <div className="publications-container02">
          <div className="publications-blog-post-card">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIyfHxzdHVkZW50c3xlbnwwfHx8fDE2ODI5NDkyOTg&amp;ixlib=rb-4.0.3&amp;w=1400"
              className="publications-image1"
            />
            <a
              href="https://doi.org/10.1007/978-3-031-24848-1_22"
              target="_blank"
              rel="noreferrer noopener"
              className="publications-link3"
            >
              <div className="publications-container03">
                <span className="publications-text">
                  Lecture notes in computer science
                </span>
                <span className="publications-text01">
                  A Rough Set Based Approach to Compute Impact of Non Academic
                  Parameters on Academic Performance
                </span>
                <span className="publications-text02">
                  <span>
                    Chatterjee, A., Roy, S., Mandal, A. (2023). A Rough Set
                    Based Approach to Compute Impact of Non Academic Parameters
                    on Academic Performance. In: Molla, A.R., Sharma, G., Kumar,
                    P., Rawat, S. (eds) Distributed Computing and Intelligent
                    Technology. ICDCIT 2023. Lecture Notes in Computer Science,
                    vol 13776. Springer, Cham.
                  </span>
                  <br></br>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>https://doi.org/10.1007/978-3-031-24848-1_22</span>
                </span>
                <div className="publications-container04">
                  <span className="publications-text07">Publication</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="publications-container05">
          <div className="publications-blog-post-card1">
            <img
              alt="image"
              src="/playground_assets/eeg-1400w.jpg"
              className="publications-image2"
            />
            <a
              href="https://doi.org/10.4018/978-1-7998-4706-9.ch006"
              target="_blank"
              rel="noreferrer noopener"
              className="publications-link4"
            >
              <div className="publications-container06">
                <span className="publications-text08">
                  Analyzing Data Through Probabilistic Modeling in Statistics
                </span>
                <span className="publications-text09">
                  A Decadal Walk on BCI Technology: A Walkthrough
                </span>
                <span className="publications-text10">
                  <span>
                    Chatterjee, A., Mandal, A., Roy, S., Sinha, S., Priya, A.,
                    &amp; Gupta, Y. (2021). A Decadal Walk on BCI Technology: A
                    Walkthrough. In D. Jakóbczak (Ed.), Analyzing Data Through
                    Probabilistic Modeling in Statistics (pp. 158-183). IGI
                    Global.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>https://doi.org/10.4018/978-1-7998-4706-9.ch006</span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
                <div className="publications-container07">
                  <span className="publications-text19">
                    <span>Publication</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="publications-container08">
          <div className="publications-blog-post-card2">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1604871000636-074fa5117945?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fEZsdWlkfGVufDB8fHx8MTY4Mjk1MzI0Nw&amp;ixlib=rb-4.0.3&amp;w=1400"
              className="publications-image3"
            />
            <a
              href="https://medium.com/analytics-vidhya/a-short-introduction-of-machine-learning-in-the-field-of-fluid-dynamics-71531f5ee02c"
              target="_blank"
              rel="noreferrer noopener"
              className="publications-link5"
            >
              <div className="publications-container09">
                <span className="publications-text22">Analytics Vidya</span>
                <span className="publications-text23">
                  A Short Introduction of Machine Learning in the field of Fluid
                  Dynamics
                </span>
                <span className="publications-text24">
                  <span>
                    A short article on how machine learning solved the problem
                    of high-dimensional modelling in fluid dynamics and how such
                    algorithms have been used by different researchers and
                    future prospects of ML in this field.
                  </span>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
                <div className="publications-container10">
                  <span className="publications-text30">Article</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Link to="/contact-me" className="publications-navlink2">
        <footer className="publications-footer">
          <span className="publications-text31">Click to continue</span>
          <svg
            viewBox="0 0 658.2857142857142 1024"
            className="publications-icon08"
          >
            <path d="M614.286 493.714c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143zM614.286 274.286c0 4.571-2.286 9.714-5.714 13.143l-266.286 266.286c-3.429 3.429-8.571 5.714-13.143 5.714s-9.714-2.286-13.143-5.714l-266.286-266.286c-3.429-3.429-5.714-8.571-5.714-13.143s2.286-9.714 5.714-13.143l28.571-28.571c3.429-3.429 8-5.714 13.143-5.714 4.571 0 9.714 2.286 13.143 5.714l224.571 224.571 224.571-224.571c3.429-3.429 8.571-5.714 13.143-5.714s9.714 2.286 13.143 5.714l28.571 28.571c3.429 3.429 5.714 8.571 5.714 13.143z"></path>
          </svg>
        </footer>
      </Link>
    </div>
  )
}

export default Publications
