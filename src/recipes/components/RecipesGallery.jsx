import React, { useEffect } from 'react'
import { getRecipeByCategory } from '../helpers'
import { useRecipesStore } from '../hooks'
import { RecipeCard } from './'

export const RecipesGallery = ({category}) => {

  // Importamos del store las recetas
  const {allRecipes, startGettingRecipes} = useRecipesStore() 

  // Usamos el siguiente array para comprobar que la categoría existe:
  const categories = ['aperitivo', 'desayuno', 'ensalada', 'principal', 'sopa', 'postre']
  // En caso contrario, se muestran todas las recetas.

  // Llamamos a la función que recoge las recetas almacenadas en la base de datos
  useEffect(()=>{
    startGettingRecipes()
  },[])

  return (
    <>
    {/* Pintamos las cards con cada una de las recetas guardadas */}
    <div 
      className='row row-cols-sm-2 pe-5'>
      {
        (categories.includes(category)) ? 
          (getRecipeByCategory(category).map(rec=>(<RecipeCard key={rec._id} recipe={rec} />))) : 
          (allRecipes.map(rec=>(<RecipeCard key={rec._id} recipe={rec} />)))}

    </div>
    </>
  )
}
