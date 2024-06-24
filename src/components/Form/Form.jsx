import React from 'react'
import Input from '../Input/Input'
import image from '../../assets/image.png'
import './form.css'

const Form = () => {
  return (
    <>
      <div className='form__asideLeft'>
        <h2>ADD IMAGE</h2>
        <form>
           <div className='form__containerImage'>
            <img src={image} alt='Choose Images'/>
           </div>
          <div className='form__yourform' >
            <Input id='name' label='Image Name' placeholder='Choose a name for your image...' />
            <Input id='description' label='Description' placeholder='Your description' />
            <div className='form__select'>
              <label htmlFor='categorie'>Categorie</label>
              <select id='categorie'>
                <option value="Other">Other</option>
                <option value="Car">Car</option>
                <option value="Women">Women</option>
                <option value="Floor">Floor</option>
              </select>
            </div>
          </div>
          <div className='form__button'>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form
