import React from "react"
import Input from "./components/Input/Input"
import Form from "./components/Form/Form"
import GalleryRight from "./components/galleryRight/GalleryRight"
import './style.css'

function App() {

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

export default App
