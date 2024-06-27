import React, { useState } from 'react'
import Form from "../../components/Form/Form"
import GalleryRight from "../../components/galleryRight/GalleryRight"
import './categoryPage.css'

const CategoryPage = (props) => {


  return (
    <>
      <div className="app_main">
        <div className="app__container">
          <Form callback={props.setFormCallback} contenu={props.contenu} />
          <GalleryRight />
        </div>
      </div>
    </>
  )
}

export default CategoryPage