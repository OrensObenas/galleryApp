import React from 'react';
import Form from "../../components/Form/Form";
import GalleryRight from "../../components/galleryRight/GalleryRight";
import './categoryPage.css';

const CategoryPage = (props) => {
  return (
    <div className="app_main">
      <div className="app__container">
        <Form callback={props.setContenu} formCallback={props.contenu} />
        <GalleryRight callback={props.setContenu} initialContent={props.initialContent} />
      </div>
    </div>
  );
}

export default CategoryPage;