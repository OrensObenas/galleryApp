import React from 'react'
import ImageFrame from '../ImageFrame/ImageFrame'
import './galleryRightImage.css'
import { Link } from 'react-router-dom'

const GalleryRightImage = (props) => {

  const categorie = props.category
  const contenu = props.contenuParCategorie

  const filtrerParCategorie = (categorie) => {
    return contenu.filter(cat => cat.category === categorie);
  };

  const recueillirInformations = (items) => {
    return items.map(item => {
      return {
        title: item.title,
        description: item.description,
        ref: item.ref
      };
    });
  };

  let infoCategories = filtrerParCategorie(categorie).flatMap(cat => recueillirInformations(cat.items))
  
  let rendu = (infoCategories) => {
    return infoCategories.map(infoCategorie => {
      return <ImageFrame key={infoCategorie.title} title={infoCategorie.title} ref={infoCategorie.ref} description={infoCategorie.description} setInfoframe ={props.setInfoframe} />
    })
  }

  console.log(rendu(infoCategories))
  return (
    <>
      <div className='galleryRightImage__container'>
        <div className='galleryRightImage__header'>
            <div>
              <Link to='/'>
                <button>Back</button>
              </Link>
            </div>
            <h2>{categorie}</h2>
        </div>
        <div className='galleryRightImage__body'>
          {/* <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame />
          <ImageFrame /> */}
          {rendu(infoCategories)}
        </div>
      </div>
    </>
  )
}

export default GalleryRightImage
