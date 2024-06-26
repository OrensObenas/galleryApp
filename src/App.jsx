import React from "react"
import ImagePage from "./pages/ImagePage/ImagePage"
import DisplayInfoPage from "./pages/DisplayInfoPage/DisplayInfoPage"
import DisplayInfo from "./components/DIsplayInfo/DisplayInfo"
import CategoryPage from './pages/CategoryPage/CategoryPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css'

function App() {

  return (
    <>
          <Router>
            <Routes>
              <Route path="/" element={<CategoryPage />} />
              <Route path="/displayImage" element={<ImagePage />} />
            </Routes>
          </Router>
    </>
  )
}

export default App