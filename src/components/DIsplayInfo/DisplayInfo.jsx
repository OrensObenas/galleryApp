import React from 'react'
import User from '../../assets/User.jpg'
import cross from '../../assets/cross.svg'
import './displayInfo.css'

const DisplayInfo = () => {
  return (
    <>
      <div className='displayInfo__main'>
          <div className='displayInfo__cross'>
          </div>
        <div className='displayInfo__container'>
            <div className='displayInfo__sideLeft'>
                <h2>Title</h2>
                <img src={User} alt='your big Image'/>
            </div>
            <div className='displayInfo__sideRight'>
                    <h2>Description</h2>
                <div className='displayInfo__description'>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor </p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default DisplayInfo