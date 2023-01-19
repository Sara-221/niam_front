import { useUiStore } from '../hooks'

export const BtnEditRecipe = () => {



  // Nos traemos del store el reducer que controla las ventanas modales
  const {closeRecipeModal, openFormModal} = useUiStore()

  const handleEditRecipe=()=>{
    //cerrar ventana detalles
    closeRecipeModal()
    // Mostrar datos de la receta en formulario
    openFormModal()
  }

  return (
    <>
        <button 
          className='btn btn-dark mb-sm-5'
          onClick={handleEditRecipe}>
            <i className="fa-solid fa-pen"></i>
              &nbsp; Editar
        </button>
    </>
  )
}