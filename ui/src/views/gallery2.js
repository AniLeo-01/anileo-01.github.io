import React from 'react'

import { Helmet } from 'react-helmet'

import './gallery2.css'

const Gallery2 = (props) => {
  return (
    <div className="gallery2-container">
      <Helmet>
        <title>Gallery2 - My Portfolio</title>
        <meta property="og:title" content="Gallery2 - My Portfolio" />
      </Helmet>
      <div className="gallery2-blog">
        <div className="gallery2-container01">
          <div className="gallery2-blog-post-card">
            <img
              alt="logo_of_omdena_partnered_with_positive_carbon"
              src="/playground_assets/untitled%20design%20%5B3%5D-1400w.png"
              loading="lazy"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="gallery2-image"
            />
            <div className="gallery2-container02">
              <div className="gallery2-container03">
                <span className="gallery2-text">
                  Omdena in partnership with positivecarbon
                </span>
                <span className="gallery2-text01">4 months</span>
                <span className="gallery2-text02">May 2022 - August 2022</span>
              </div>
              <h1 className="gallery2-text03">Python Intern</h1>
              <span className="gallery2-text04">
                <span>
                  Led a team of 10 machine learning engineers to annotate and
                  process over 5000 images for semantic segmentation and
                  developed a pipeline to calculate the area of the objects.
                </span>
                <br></br>
                <span>
                  Collaborated with PositiveCarbon to reduce the carbon emission
                  from food waste, by letting the kitchens see what they’re
                  wasting and how to make changes to their preparation,
                  production, and purchasing habits to reduce it.
                </span>
              </span>
              <div className="gallery2-container04">
                <div className="gallery2-profile">
                  <span className="gallery2-text08">Remote</span>
                </div>
                <a
                  href="https://www.positivecarbon.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gallery2-link"
                >
                  Go to website-&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery2-container05">
          <div className="gallery2-blog-post-card1">
            <img
              alt="logo_of_SSERD"
              src="/playground_assets/sserd.png"
              loading="lazy"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="gallery2-image1"
            />
            <div className="gallery2-container06">
              <div className="gallery2-container07">
                <span className="gallery2-text09">Sserd</span>
                <span className="gallery2-text10">
                  September 2021 - October 2021
                </span>
              </div>
              <h1 className="gallery2-text11">Analyst</h1>
              <span className="gallery2-text12">
                Built dashboard for pricing and backend architecture using
                FastAPI and Postgresql and used segmentation models to analyze
                car damage for the insurance company, MyCover.ai to understand
                and insure vehicles more effectively.
              </span>
              <div className="gallery2-container08">
                <div className="gallery2-profile1">
                  <span className="gallery2-text13">Remote</span>
                </div>
                <a
                  href="https://www.mycover.ai/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gallery2-link1"
                >
                  Go to website-&gt;
                </a>
              </div>
              <span className="gallery2-text14">2 months</span>
            </div>
          </div>
        </div>
        <div className="gallery2-blog-post-card2">
          <img
            alt="image"
            src="/playground_assets/envisionitdeepai-1400w.png"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="gallery2-image2"
          />
          <div className="gallery2-container09">
            <div className="gallery2-container10">
              <span className="gallery2-text15">
                omdena in partnership with envisionit deep ai
              </span>
              <span className="gallery2-text16">January 2021 - April 2021</span>
            </div>
            <span className="gallery2-text17">4 months</span>
            <div className="gallery2-container11">
              <h1 className="gallery2-text18">
                Junior Machine Learning Engineer
              </h1>
            </div>
            <span className="gallery2-text19">
              Created ML preprocessing pipeline for Ultrasound Image data using
              Activeloop and three different instances of semantic segmentation
              model using PyTorch and TensorFlow, to help the doctors in Africa
              use Ultrasound for detection of cancer in a low-cost approach.
            </span>
            <div className="gallery2-container12">
              <div className="gallery2-profile2">
                <span className="gallery2-text20">Remote</span>
              </div>
              <a
                href="https://www.edai.africa/"
                target="_blank"
                rel="noreferrer noopener"
                className="gallery2-link2"
              >
                Go to website-&gt;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery2
