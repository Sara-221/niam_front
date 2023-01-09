import { useRecipesStore } from "../hooks/useRecipesStore"
import { useUiStore } from "../hooks/useUiStore"


export const BtnAddRecipe = () => {

    // Nos traemos el estado de las modales desde el store:
    const {formModalIsOpen, openFormModal, recipeModalIsOpen } = useUiStore()  
    // Y el reducer para poder resetear la receta activa:
    const {setActiveRecipe} = useRecipesStore()
    
    // Función encargada de añadir la receta al hacer click en botón "añadir"
    const handleNewRecipe=()=>{
        // Reseteamos la receta activa para limpiar el formulario
        setActiveRecipe({
                name: '',
                category: '',
                url: '',
                time: '',
                ingredients:'',
                method: '',
                notes: ''
            })
        // Abrir la modal
        openFormModal('addRecipe')
    }

  return (

    <>
        <div className='d-grid sticky-bottom justify-content-end pb-3'>
            <button 
            // Le asignamos la clase "display none" si la modal está abierta, para que en dicho caso el botón no aparezca superpuesto.
                className={
                    `btn btn-dark mb-5 me-sm-2
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

