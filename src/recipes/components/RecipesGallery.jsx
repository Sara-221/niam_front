import React from 'react'
import { getRecipeByCategory } from '../helpers'
import { useRecipesStore } from '../hooks'
import { RecipeCard } from './'

export const RecipesGallery = ({category}) => {

  // Importamos del store las recetas
  const {allRecipes} = useRecipesStore() 

  // Comprobamos que la categoría existe:
  const categories = ['aperitivo', 'desayuno', 'ensalada', 'principal', 'sopa', 'postre']


  return (
    <>
    {/* Pintamos las cards con cada una de las recetas guardadas */}
    <div className='row row-cols-sm-2 pe-5'>
      {
        (categories.includes(category)) ? 
          (getRecipeByCategory(category).map(rec=>(<RecipeCard key={rec._id} recipe={rec} />))) : 
          (allRecipes.map(rec=>(<RecipeCard key={rec._id} recipe={rec} />)))}

    </div>
    </>
  )
}
