import React from 'react'
import Frame from '../Frame/Frame'
import floor from '../../assets/floor.png'
import car from '../../assets/car.png'
import other from '../../assets/other.png'
import women from '../../assets/women.png'
import { Link } from 'react-router-dom'
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
            <Link to='/displayImage'>
              <Frame road={car} title="car"/>
            </Link>
            <Link to='/displayImage'>
              <Frame road={women} title="women"/>
            </Link>
          </div>
          <div>
            <Link to='/displayImage'>
              <Frame road={floor} title="floor"/>
            </Link>
            <Link to='/displayImage'>
              <Frame road={other} title="other"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default GalleryRight
