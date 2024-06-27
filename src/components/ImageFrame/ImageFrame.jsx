import React from 'react'
import user from '../../assets/User.jpg'
import './imageFrame.css'

const ImageFrame = (props) => {

  const handleClick = () => {
    const displayInfo__main = document.querySelector('.displayInfo__main'),
          display = getComputedStyle(displayInfo__main, null).display

          displayInfo__main.style.display = 'flex'

          props.setInfoframe(
            {
              title : props.title,
              description : props.description,
              ref : props.ref
            }
          )
      }  
    

  console.log(props.title)

  return (
    <>
      <div className='ImageFrame__container' onClick={handleClick}>
        <div className='ImageFrame__header'>
            <h2>{props.title}</h2>
            <button>Learn more</button>
        </div>
        <div className='ImageFrame__image'>
            <img src={props.ref} alt='Our image' />
        </div>
      </div>
    </>
  )
}

export default ImageFrame
