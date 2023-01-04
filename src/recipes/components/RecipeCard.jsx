import React from 'react'

export const RecipeCard = ({name, category, time, url, ingredients, method, notas, id}) => {

  const iconURL = `/img/categories/${category}.png`
  
  console.log(iconURL)

  return (
    <>
    <article className='d-grid mt-2'>
      <div className='card mb-4'>
        <div className='row align-items-center'>
          <div className='col-3'>
            <img src={iconURL} alt={category} />
          </div>
          <div className='col py-2'>
            <h5>{name}</h5>
            <p>Tiempo de preparación: {time} <br></br>
            Categoría: <em>{category}</em></p>
          </div>

        </div>
      </div>
    </article>
    </>
  )
}
