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
        image: item.image
      };
    });
  };


  let infoCategories = filtrerParCategorie(categorie).flatMap(cat => recueillirInformations(cat.items))
  
  let rendu = (infoCategories) => {
    return infoCategories.map(infoCategorie => {
      return <ImageFrame key={infoCategorie.title} title={infoCategorie.title} image={infoCategorie.image} description={infoCategorie.description} category={categorie} setInfoframe ={props.setInfoframe} infoframe={props.infoframe} setFormCallback={props.setFormCallback} formCallback={props.formCallback}/>
    })
  }
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
          {rendu(infoCategories)}
        </div>
      </div>
    </>
  )
}

export default GalleryRightImage
