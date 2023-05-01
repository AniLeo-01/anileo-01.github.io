import React from 'react'

import PropTypes from 'prop-types'

import './blog-post-card22.css'

const BlogPostCard22 = (props) => {
  return (
    <div className={`blog-post-card22-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="blog-post-card22-image"
      />
      <div className="blog-post-card22-container">
        <div className="blog-post-card22-container1">
          <span className="blog-post-card22-text">{props.label}</span>
          <span className="blog-post-card22-text1">{props.when}</span>
        </div>
        <h1 className="blog-post-card22-text2">{props.title}</h1>
        <span className="blog-post-card22-text3">{props.description}</span>
        <div className="blog-post-card22-container2">
          <div className="blog-post-card22-profile">
            <img
              alt={props.profile_alt}
              src={props.profile_src}
              className="blog-post-card22-image1"
            />
            <span className="blog-post-card22-text4">{props.author}</span>
          </div>
          <span className="blog-post-card22-text5">Read More -&gt;</span>
        </div>
      </div>
    </div>
  )
}

BlogPostCard22.defaultProps = {
  rootClassName: '',
  label: 'ENTERPRISE',
  author: 'Jane Doe',
  profile_alt: 'profile',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  when: '3 days ago',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  image_alt: 'image',
}

BlogPostCard22.propTypes = {
  rootClassName: PropTypes.string,
  label: PropTypes.string,
  author: PropTypes.string,
  profile_alt: PropTypes.string,
  profile_src: PropTypes.string,
  image_src: PropTypes.string,
  when: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard22
