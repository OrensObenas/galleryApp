import React from 'react'
import user from '../../assets/User.jpg'
import './imageFrame.css'

const ImageFrame = () => {

  const handleClick = () => {
    const displayInfo__main = document.querySelector('.displayInfo__main'),
          display = getComputedStyle(displayInfo__main, null).display

          displayInfo__main.style.display = 'flex'

  }

  return (
    <>
      <div className='ImageFrame__container' onClick={handleClick}>
        <div className='ImageFrame__header'>
            <h2>Image Frame</h2>
            <button>Learn more</button>
        </div>
        <div className='ImageFrame__image'>
            <img src={user} alt='Our image' />
        </div>
      </div>
    </>
  )
}

export default ImageFrame
