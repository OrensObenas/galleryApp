import React, { useState } from 'react';
import Input from '../Input/Input';
import image from '../../assets/image.png';
import './form.css';

const Form = (props) => {
  const [imageTitle, setImageTitle] = useState("");
  const [imageDescription, setImageDescription] = useState("");
  const [imageSection, setImageSection] = useState("other");
  const [preview, setPreview] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handlesubmit = (e) => {
    e.preventDefault();

    const myobjet = {
      title: imageTitle,
      description: imageDescription,
      ref: preview,
      category: imageSection
    };

    props.callback([...props.formCallback, myobjet]);
  };

  const handleSectionChange = (e) => {
    setImageSection(e.target.value);
  }

  const handleClick = () => {
    document.getElementById("image").click();
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className='form__asideLeft'>
      <h2>ADD IMAGE</h2>
      <form onSubmit={handlesubmit}>
        <div className='form__containerImage'>
          <span onClick={handleClick}>
            {preview ? <img src={preview} alt="Photo de profil" className="UserImage" /> : (<img src={image} alt='Choose Images' />)}
            <input type="file" id="image" onChange={handleFileChange} className='hidden' />
          </span>
        </div>
        <div className='form__yourform'>
          <Input id='name' label='Image Name' placeholder='Choose a name for your image...' value={imageTitle} callback={setImageTitle} />
          <Input id='description' label='Description' placeholder='Your description' value={imageDescription} callback={setImageDescription} />
          <div className='form__select'>
            <label htmlFor='categorie'>Categorie</label>
            <select id='categorie' value={imageSection} onChange={handleSectionChange}>
              <option value="other">Other</option>
              <option value="car">Car</option>
              <option value="women">Women</option>
              <option value="floor">Floor</option>
            </select>
          </div>
        </div>
        <div className='form__button'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;