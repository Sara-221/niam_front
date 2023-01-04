import React from 'react'

export const RecipeCard = ({name, category, time, url, ingredients, method, notas, id}) => {

  const iconURL = `/img/categories/${category}.png`
  
  console.log(iconURL)

  return (
    <>
    <article className='d-grid mt-2'>
      <div className='card flex-row mb-3 align-items-center'>
        <img src={iconURL} alt={category} className="card-img-left h-md-75 px-2" />
        <div className='card-body'>
          <h5>{name}</h5>
          <p>Tiempo de preparación: {time} <br></br>
          Categoría: <em>{category}</em></p>
        </div>
      </div>
    </article>
    </>
  )
}
