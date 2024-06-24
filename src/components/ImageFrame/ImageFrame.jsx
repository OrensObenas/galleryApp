import React from 'react'
import user from '../../assets/User.jpg'
import './imageFrame.css'

const ImageFrame = () => {
  return (
    <>
      <div className='ImageFrame__container'>
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
