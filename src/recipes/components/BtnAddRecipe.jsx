import React from 'react'

export const BtnAddRecipe = () => {

    const handleNewRecipe=(ev)=>{
        console.log(ev)
    }

  return (
    <>
        <div className='d-grid fixed-bottom justify-content-end'>
            <button 
                className='btn btn-dark mb-4 mx-5'
                onClick={handleNewRecipe}>
                &#43; Añadir una receta
            </button>
        </div>
    </>
  )
}
