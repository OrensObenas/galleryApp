import React, { useState } from 'react'
import Form from '../../components/Form/Form'
import GalleryRightImage from '../../components/galleryRightImage/GalleryRightImage'
import DisplayInfo from '../../components/DIsplayInfo/DisplayInfo'
import { useLocation } from 'react-router-dom'

const ImagePage = (props) => {

  const [infoFrame, setInfoFrame] = useState(null)
  const location = useLocation()
  const { pathname, search, hash, state } = location;

  const query = new URLSearchParams(search);

  const category = query.get("category");

  
  const trierParCategorie = (array) => {
    return array.sort((a, b) => {
      if (a.category < b.category) {
        return -1;
      }
      if (a.category > b.category) {
        return 1;
      }
      return 0;
    });
  };  
  // Trier le tableau
  let contenuTrie = trierParCategorie(props.formCallback);
  
  // Structurer les données par catégorie
  const categories = [...new Set(contenuTrie.map(item => item.category))];
  
  const contenuParCategorie = categories.map(category => {
    return {
      category: category,
      items: contenuTrie.filter(item => item.category === category)
    };
  });
  

  return (
    <>
      <div className="app_main">
        <DisplayInfo infoFrame={infoFrame} />
        <div className="app__container">
          <Form />
          <GalleryRightImage category={category} contenuParCategorie={contenuParCategorie} setInfoFrame={setInfoFrame} />
        </div>
      </div>
    </>
  )
}

export default ImagePage
