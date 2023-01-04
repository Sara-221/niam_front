import React from 'react'
import { RecipeCard } from './'

export const RecipesGallery = () => {

  const tmpRecipeList = [
    {
      name: 'nombre de la receta',
      category: 'aperitivo',
      time: 'x min',
      url: 'link de la receta',
      ingredients: 'lista de ingredientes',
      method: 'instrucciones',
      notas: '',
      id: 123
    },
    {
      name: 'nombre de la receta',
      category: 'desayuno',
      time: 'x min',
      url: 'link de la receta',
      ingredients: 'lista de ingredientes',
      method: 'instrucciones',
      notas: '',
      id: 214
    },
    {
      name: 'nombre de la receta',
      category: 'ensalada',
      time: 'x min',
      url: 'link de la receta',
      ingredients: 'lista de ingredientes',
      method: 'instrucciones',
      notas: '',
      id: 646
    }

  ]

  return (
    <>
    {/* Pintamos las cards con cada una de las recetas guardadas */}
    <div className='row row-cols-1 row-cols-md-2'>
      {
        tmpRecipeList.map(rec=>(
          <RecipeCard key={rec.id} {...rec}/>
        ))
      }

    </div>
    </>
  )
}
