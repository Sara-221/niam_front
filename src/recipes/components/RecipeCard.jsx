import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRecipesStore, useUiStore } from '../hooks'
import { RecipeModal } from './RecipeModal'

// Mostramos los elementos principales de la receta en cards
export const RecipeCard = ({recipe}) => {

  const {name, category, time, _id} = recipe

  // URL de las imágenes representando la categoría de la receta
  const iconURL = `/img/categories/${category}.png`

  const {openRecipeModal} = useUiStore()
  const {activeRecipe, setActiveRecipe} = useRecipesStore()

  const handleClick = (selRecipe) => {
    // Seleccionar la receta en la que se ha hecho click
    setActiveRecipe(selRecipe)
    // Abrir modal para ver detalles de receta/editar o eliminar.
    openRecipeModal()
  }

  return (
    <>
    <article 
      className='d-grid mt-2'>
          <div 
            className='card flex-row mb-3 align-items-center'
            onClick={(ev,id)=>handleClick(recipe)}>
              <img src={iconURL} alt={category} className="card-img-left h-md-75 px-2" />
              <div className='card-body'>
                <h5>{name}</h5>
                <p>Tiempo de preparación: {time} <br></br>
                Categoría: <em>{category}</em></p>
              </div>
          </div>
        {/* </Link> */}
    </article>
    {/* Al hacer click, abrimos la modal con los detalles de la receta seleccionada */}
    {
      (activeRecipe!==null) ? <RecipeModal recipe={activeRecipe}/> : ''
    }
    
    </>
  )
}
