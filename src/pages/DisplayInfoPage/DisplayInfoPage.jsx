import React from 'react'
import DisplayInfo from '../../components/DIsplayInfo/DisplayInfo'
import './displayInfoPage.css'
import { useLocation } from 'react-router-dom'

const DisplayInfoPage = () => {

  const location = useLocation()
  const { pathname, search, hash, state } = location;

  const query = new URLSearchParams(search);
  const category = query.get("category");
  const title = query.get("title");
  const description = query.get("description");

  return (
    <>
      <div className="app_main_display">
        <DisplayInfo category={category} title={title} description={description} />
        <div className="app__container_display">
        </div>
      </div>
    </>
  )
}

export default DisplayInfoPage