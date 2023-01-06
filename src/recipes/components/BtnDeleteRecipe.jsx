import React from 'react'

export const BtnDeleteRecipe = () => {

  const handleDeleteRecipe=()=>{
      
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
