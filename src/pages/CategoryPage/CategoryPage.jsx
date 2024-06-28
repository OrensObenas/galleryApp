import React from 'react';
import Form from "../../components/Form/Form";
import GalleryRight from "../../components/galleryRight/GalleryRight";
import './categoryPage.css';

const CategoryPage = (props) => {
  return (
    <div className="app_main">
      <div className="app__container">
        <Form callback={props.setFormCallback} formCallback={props.formCallback} />
        <GalleryRight />
      </div>
    </div>
  );
}

export default CategoryPage;