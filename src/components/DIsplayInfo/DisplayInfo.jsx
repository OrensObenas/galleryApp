import React from 'react'
import User from '../../assets/User.jpg'
import cross from '../../assets/cross.svg'
import './displayInfo.css'

const DisplayInfo = () => {

  const handleClick = () => {
    const displayInfo__main = document.querySelector('.displayInfo__main'),
          display = getComputedStyle(displayInfo__main, null).display

          displayInfo__main.style.display = 'none'

  }

  return (
    <>
      <div className='displayInfo__main'>
        <div className='displayInfo__cross'>
          <div className='displayInfo__buttoncross' onClick={handleClick}>
            <img src={cross} alt='cross' className='displayInfo__crossimg' />
          </div>
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