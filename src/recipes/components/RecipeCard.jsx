import React from 'react'
import { Link } from 'react-router-dom'
import { useRecipesStore, useUiStore } from '../hooks'
import { DetailsRecipePage } from '../pages'
import { RecipeModal } from './RecipeModal'

// Mostramos los elementos principales de la receta en cards
export const RecipeCard = ({recipe}) => {

  const {name, category, time, _id} = recipe

  // URL de las imágenes representando la categoría de la receta
  const iconURL = `/img/categories/${category}.png`

  const {openRecipeModal} = useUiStore()
  const {setActiveRecipe} = useRecipesStore()

  const handleClick = (id) => {
    setActiveRecipe(id)
    openRecipeModal()
  }

  return (
    <>
    <article 
      className='d-grid mt-2'>
        {/* Utilizamos el id de la receta para identificar de cuál queremos los detalles */}
        {/* <Link style={{textDecoration: 'none'}} to = {`/recipe/${id}`}> */}
          <div 
            className='card flex-row mb-3 align-items-center'
            onClick={(ev,id)=>handleClick(_id)}>
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
    <RecipeModal recipe={recipe}/>
    </>
  )
}
