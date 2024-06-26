import React from 'react'
import Form from '../../components/Form/Form'
import GalleryRightImage from '../../components/galleryRightImage/GalleryRightImage'
import DisplayInfo from '../../components/DIsplayInfo/DisplayInfo'

const ImagePage = () => {
  return (
    <>
      <div className="app_main">
        <DisplayInfo />
        <div className="app__container">
          <Form />
          <GalleryRightImage />
        </div>
      </div>
    </>
  )
}

export default ImagePage
