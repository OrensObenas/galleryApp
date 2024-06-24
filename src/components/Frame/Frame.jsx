import React from 'react'
import './frame.css'

const Frame = (props) => {
  return (
    <>
      <div className='frame__container'>
        <img src={props.road} alt='frame' />
        <h3>{props.title}</h3>
      </div>
    </>
  )
}

export default Frame
