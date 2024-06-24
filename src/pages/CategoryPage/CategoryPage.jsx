import React from 'react'
import Form from "../../components/Form/Form"
import GalleryRight from "../../components/galleryRight/GalleryRight"
import './categoryPage.css'

const CategoryPage = () => {
  return (
    <>
      <div className="app_main">
        <div className="app__container">
          <Form />
          <GalleryRight />
        </div>
      </div>
    </>
  )
}

export default CategoryPage