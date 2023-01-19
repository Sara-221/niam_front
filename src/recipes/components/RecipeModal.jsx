import { useState } from 'react';
import Modal from 'react-modal';
import { useUiStore } from '../hooks/useUiStore';
import { BtnDeleteRecipe, BtnEditRecipe } from './';

import './modalStyle.css'

// Estilos de la modal, como descritos en la documentación de react-modal
const customStyles = {
    content: {
      top: '0%',
      left: '0%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '0%',
      transform: 'translate(4%, 4%)',
    },
  };

// La ventana modal envuelve toda la aplicación
Modal.setAppElement('#root');

export const RecipeModal = ({recipe}) => {

    // Desestructuración del objeto receta
    const {name, category, time, url, ingredients, method, notes, _id} = recipe
    const iconURL = `/img/categories/${category}.png`

    // Uso de la modal
    const {recipeModalIsOpen, closeRecipeModal} = useUiStore()

  return (
    <>
    <Modal
        isOpen={recipeModalIsOpen}
        onRequestClose={closeRecipeModal}
        style={customStyles}
        className="modalRecipe"
    >
    
    {/* Sección principal */}
    <main className='d-grid'>
        {/* Cerrar modal */}
        <button
            className='btn-close btnCerrar'
            type='button'
            onClick= {closeRecipeModal}>    
        </button>
        {/* Contenido de la modal */}
        {/* Titulo y categoría */}
        <div className='d-flex align-items-start'>
            <img src={iconURL} alt={`icono ${category}`} />
            <div className='text-left mb-1'>
                <h1 className='subrayado'>{name}</h1>
                <h5 className='h6'>{category}</h5>
            </div>
        </div>
        {/* Información introducida por el usuario */}
        <div className='d-sm-flex justify-content-between pe-sm-3'>
            <div>
                <div className='d-sm-flex align-items-center'>
                    <h4 className='me-2'>Tiempo de preparación: </h4>
                    <h6>{time}</h6>
                </div>
                <div className='d-sm-flex align-items-center'>
                    <h4 className='me-2'>Enlace: </h4>
                    <h6><a className='text-lowercase text-decoration-none small' href={url}>{url}</a></h6>
                </div>
                {/* Párrafos de ingredientes y elaboración  */}
                <div className='d-sm-flex flex-column'>
                    <h4 className='me-2'>Ingredientes: </h4>
                    <p className='ingredientes p-2'>{ingredients}</p>
                </div>
                <div className='d-sm-flex flex-column'>
                    <h4>Elaboración:</h4>
                    <p className='p-2 overflow-auto elaboracion'>{method}</p>
                </div>
            </div>
            <div className='notas'>
                <h4>Mis Notas</h4>
                <p>{notes}</p>
            </div>
        </div>

    <div className='btnPos'>
        <BtnDeleteRecipe/>
        <BtnEditRecipe/>
    </div>
    
    </main>
    
    
  </Modal>

  </>
  )
}
