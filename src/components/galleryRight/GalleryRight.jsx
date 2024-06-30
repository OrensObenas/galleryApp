import React from 'react'
import Frame from '../Frame/Frame'
import floor from '../../assets/floor.png'
import car from '../../assets/car.png'
import other from '../../assets/other.png'
import women from '../../assets/women.png'
import { Link } from 'react-router-dom'
import './galleryRight.css'

const GalleryRight = (props) => {

  const handleResetClick = () => {
    props.callback(props.initialContent)
  }

  console.log(props.initialContent)
  return (
    <>
      <div className='galleryRight__container'>
        <div className='galleryRight__header'>
            <div>
              <button onClick={handleResetClick}>Reset</button>
            </div>
            <div>
              <h2>Gallery</h2>
            </div>
            <div className='element'>
              <Link to="/form" className='link'>
                <button>Add Element</button>
              </Link>
            </div>
        </div>
        <div className='galleryRight__body'>
          <div>
            <Link to="/displayImage?category=car" className='link'>
              <Frame road={car} title="car"/>
            </Link>
            <Link to="/displayImage?category=women" className='link'>
              <Frame road={women} title="women"/>
            </Link>
          </div>
          <div>
            <Link to="/displayImage?category=floor" className='link'>
              <Frame road={floor} title="floor"/>
            </Link>
            <Link to="/displayImage?category=other" className='link'>
              <Frame road={other} title="other"/>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default GalleryRight
