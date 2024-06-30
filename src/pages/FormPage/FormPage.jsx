import React from 'react'
import Form from '../../components/Form/Form'
import './formPage.css'

const FormPage = (props) => {
  return (
    <div className="app_main">
      <div className="app__container_form">
      <Form callback={props.setContenu} formCallback={props.contenu} />
      </div>
    </div>
  )
}

export default FormPage
