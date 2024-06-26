import React from 'react'
import ImageFrame from '../ImageFrame/ImageFrame'
import './galleryRightImage.css'
import { Link } from 'react-router-dom'

const GalleryRightImage = () => {
  return (
    <>
      <div className='galleryRightImage__container'>
        <div className='galleryRightImage__header'>
            <div>
              <Link to='/'>
                <button>Back</button>
              </Link>
            </div>
            <h2>Other</h2>
        </div>
        <div className='galleryRightImage__body'>
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
        </div>
      </div>
    </>
  )
}

export default GalleryRightImage
