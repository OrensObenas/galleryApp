import React from 'react'
import './input.css'

const Input = (props) => {
  return (
    <>
      <div className='Input__frame'>
        <label htmlFor={props.id}>{props.label}</label>
        <input type='text' placeholder={props.placeholder} id={props.id} />
      </div>
    </>
  )
}

export default Input
