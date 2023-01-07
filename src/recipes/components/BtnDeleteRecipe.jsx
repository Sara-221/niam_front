import React from 'react'
import { useRecipesStore, useUiStore } from '../hooks'

export const BtnDeleteRecipe = () => {

  // Nos traemos del store el reducer para eliminar
  const {activeRecipe, startDeletingRecipe} = useRecipesStore()

  // Y el que cierra la venta modal
  const {closeRecipeModal} = useUiStore()

  const handleDeleteRecipe=()=>{
      // Confirmación del usuario para eliminar
      let confirmDelete = "¿Seguro que quieres eliminar esta receta?"
      if(confirm(confirmDelete)==true) startDeletingRecipe()
      
      // Cerrar ventana
      closeRecipeModal()
  }

  return (

    <>
        <button 
          className='btn btn-outline-dark mb-4 me-2'
          onClick={handleDeleteRecipe}>
            <i className="fa-solid fa-trash-can"></i>
              &nbsp; Eliminar
        </button>
      
    </>
  )
}
