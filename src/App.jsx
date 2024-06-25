import React from "react"
import ImagePage from "./pages/ImagePage/ImagePage"
import DisplayInfoPage from "./pages/DisplayInfoPage/DisplayInfoPage"
import DisplayInfo from "./components/DIsplayInfo/DisplayInfo"
import './style.css'

function App() {

  return (
    <>
      <div className="app_main">
        <DisplayInfo />
        <div className="app__container">
          <DisplayInfoPage />
        </div>
      </div>
    </>
  )
}

export default App