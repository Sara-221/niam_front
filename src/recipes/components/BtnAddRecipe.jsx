import { useUiStore } from "../hooks/useUiStore"


export const BtnAddRecipe = () => {

    // Nos traemos el estado de las modales desde el store:
    const {formModalIsOpen, openFormModal, recipeModalIsOpen } = useUiStore()  
    
    // Función encargada de añadir la receta al hacer click en botón "añadir"
    const handleNewRecipe=()=>{
        
        // Abrir la modal
        openFormModal()
    }

  return (

    <>
        <div className='d-grid fixed-bottom justify-content-end'>
            <button 
            // Le asignamos la clase "display none" si la modal está abierta, para que en dicho caso el botón no aparezca superpuesto.
                className={
                    `btn btn-dark mb-4 mx-5
                    ${formModalIsOpen || recipeModalIsOpen ? 'dNone' : ''}
                    `
                }
                onClick={handleNewRecipe}>
                    <i className="fa-solid fa-plus"></i>
                &nbsp; Añadir una receta
            </button>
        </div>
    </>
  )
}

