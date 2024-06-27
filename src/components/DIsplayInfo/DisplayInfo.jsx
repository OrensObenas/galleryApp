import React from 'react'
import User from '../../assets/User.jpg'
import cross from '../../assets/cross.svg'
import './displayInfo.css'
import { Link } from 'react-router-dom'

const DisplayInfo = (props) => {

  const handleClick = () => {
    const displayInfo__main = document.querySelector('.displayInfo__main'),
          display = getComputedStyle(displayInfo__main, null).display

          displayInfo__main.style.display = 'none'

  }

  const category = props.category;
  const backhref = `/displayImage?category=${category}`
  return (
    <>
      <div className='displayInfo__main'>
        <div className='displayInfo__cross'>
        <Link to={backhref}>
          <div className='displayInfo__buttoncross'>
            <img src={cross} alt='cross' className='displayInfo__crossimg' />
          </div>
        </Link>
        </div>
        <div className='displayInfo__container'>
            <div className='displayInfo__sideLeft'>
                <h2>{props.title} </h2>
                <img src={props.image} alt='your big Image'/>
            </div>
            <div className='displayInfo__sideRight'>
                    <h2>Description</h2>
                <div className='displayInfo__description'>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default DisplayInfo