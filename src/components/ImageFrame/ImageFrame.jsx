import React from 'react'
import user from '../../assets/User.jpg'
import './imageFrame.css'
import { Link } from 'react-router-dom'

const ImageFrame = (props) => {
 
  
  const myImage = JSON.stringify(props.image)
  const myImage2 = JSON.parse(myImage)
  
  const mylink = Object.values(myImage2)
  const href = `/displayInformation?category=${props.category}&title=${props.title}&description=${props.description}&image=${encodeURIComponent(mylink)}`

  return (
    <>
      <Link to={href} className='link'>
        <div className='ImageFrame__container'>
          <div className='ImageFrame__header'>
              <h2>{props.title}</h2>
              <button>Learn more</button>
          </div>
          <div className='ImageFrame__image'>
              <img src={mylink} alt='Our image' />
          </div>
        </div>
      </Link>
    </>
  )
}

export default ImageFrame
