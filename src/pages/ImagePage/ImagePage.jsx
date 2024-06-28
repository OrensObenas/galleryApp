import React, { useState } from 'react';
import Form from '../../components/Form/Form';
import GalleryRightImage from '../../components/galleryRightImage/GalleryRightImage';
import { useLocation } from 'react-router-dom';

const ImagePage = (props) => {
  const [infoFrame, setInfoFrame] = useState(null);
  const location = useLocation();
  const { search } = location;

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

  let contenuTrie = trierParCategorie(props.formCallback);
  const categories = [...new Set(contenuTrie.map(item => item.category))];
  const contenuParCategorie = categories.map(category => {
    return {
      category: category,
      items: contenuTrie.filter(item => item.category === category)
    };
  });

  return (
    <div className="app_main">
      <div className="app__container">
        <Form callback={props.setFormCallback} formCallback={props.formCallback} />
        <GalleryRightImage category={category} contenuParCategorie={contenuParCategorie} setInfoFrame={setInfoFrame} infoFrame={infoFrame} />
      </div>
    </div>
  );
}

export default ImagePage;
