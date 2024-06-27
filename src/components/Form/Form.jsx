import React, { useState } from 'react'
import Input from '../Input/Input'
import image from '../../assets/image.png'
import './form.css'

const Form = (props) => {

  const [imageTitle, setImageTitle] = useState("")
  const [imageDescription, setImageDescription] = useState("")
  const [imageSection, setImageSection] = useState("")

  const handlesubmit = (e) => {

    const myobjet = {
      title : {imageTitle},
      description : {imageDescription},
      ref : '',
      category : {imageSection}
    }

    props.setFormCallback([...props.contenu ,myobjet])

  }

  const handleSectionChange = () =>{
    setImageSection(e.target.value)
  }

  return (
    <>
      <div className='form__asideLeft'>
        <h2>ADD IMAGE</h2>
        <form onSubmit={handlesubmit}>
           <div className='form__containerImage'> bfhg
            <img src={image} alt='Choose Images'/>
           </div>
          <div className='form__yourform' >
            <Input id='name' label='Image Name' placeholder='Choose a name for your image...' value={imageTitle} callback={setImageTitle}/>
            <Input id='description' label='Description' placeholder='Your description' value={imageDescription} callback={setImageDescription}/>
            <div className='form__select'>
              <label htmlFor='categorie'>Categorie</label>
              <select id='categorie' value={imageSection} onChange={handleSectionChange}>
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
