import React from 'react'
import Frame from '../Frame/Frame'
import floor from '../../assets/floor.png'
import car from '../../assets/car.png'
import other from '../../assets/other.png'
import women from '../../assets/women.png'
import './galleryRight.css'

const GalleryRight = () => {
  return (
    <>
      <div className='galleryRight__container'>
        <div className='galleryRight__header'>
            <h2>Gallery</h2>
        </div>
        <div className='galleryRight__body'>
          <div>
            <Frame road={car} title="car"/>
            <Frame road={women} title="women"/>
          </div>
          <div>
            <Frame road={floor} title="floor"/>
            <Frame road={other} title="other"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default GalleryRight
