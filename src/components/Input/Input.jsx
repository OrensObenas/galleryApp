import React from 'react'
import './input.css'

const Input = (props) => {

 const handlechange = (e) => {
    props.callback(e.target.value)
 }

  return (
    <>
      <div className='Input__frame'>
        <label htmlFor={props.id}>{props.label}</label>
        <input type='text' placeholder={props.placeholder} id={props.id} value={props.value} onChange={handlechange} required/>
      </div>
    </>
  )
}

export default Input
