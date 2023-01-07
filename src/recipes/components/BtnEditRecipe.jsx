import React from 'react'
import { useRecipesStore, useUiStore } from '../hooks'

export const BtnEditRecipe = () => {

  // Nos traemos del store el reducer para editar
  const {activeRecipe, startSavingRecipe} = useRecipesStore()

  // Y el que controla las ventanas modales
  const {closeRecipeModal, openFormModal} = useUiStore()

  const handleEditRecipe=()=>{
    //cerrar ventana detalles
    closeRecipeModal()
    // Mostrar datos de la receta en formulario
    openFormModal()
    // Guardar los cambios
    //startSavingRecipe(activeRecipe)
  }

  return (
    <>
      
        <button 
          className='btn btn-dark mb-4 me-5'
          onClick={handleEditRecipe}>
            <i className="fa-solid fa-pen"></i>
              &nbsp; Editar
        </button>
    </>
  )
}