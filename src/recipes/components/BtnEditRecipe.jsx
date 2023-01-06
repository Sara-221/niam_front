import React from 'react'

export const BtnEditRecipe = () => {

  const handleEditRecipe=()=>{

  }

  return (
    <>
      
        <button 
          className='btn btn-dark mb-4 me-5'
          onClick={handleEditRecipe}>
            <i className="fa-solid fa-pen"></i>
              &nbsp; Editar
        </button>
    </>
  )
}