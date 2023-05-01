import React from 'react'

import PropTypes from 'prop-types'

import './gallery-card12.css'

const GalleryCard12 = (props) => {
  return (
    <div className={`gallery-card12-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="gallery-card12-image"
      />
      <h2 className="gallery-card12-text">{props.title}</h2>
      <span className="gallery-card12-text1">{props.subtitle}</span>
    </div>
  )
}

GalleryCard12.defaultProps = {
  subtitle: 'Lorem ipsum dolor sit amet',
  rootClassName: '',
  image_alt: 'image',
  title: 'Project Title',
  image_src:
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200',
}

GalleryCard12.propTypes = {
  subtitle: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
  image_src: PropTypes.string,
}

export default GalleryCard12
