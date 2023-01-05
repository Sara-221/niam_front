import { useUiStore } from "../hooks/useUiStore"


export const BtnAddRecipe = () => {

    // Desestructuramos las acciones que nos interesan del store:
    const {modalIsOpen, openModal} = useUiStore()  
    
    // Función encargada de añadir la receta al hacer click en botón "añadir"
    const handleNewRecipe=()=>{
        
        // Abrir la modal
        openModal()
    }

  return (

    <>
        <div className='d-grid fixed-bottom justify-content-end'>
            <button 
            // Le asignamos la clase "display none" si la modal está abierta, para que en dicho caso el botón no aparezca superpuesto.
                className={
                    `btn btn-dark mb-4 mx-5
                    ${modalIsOpen ? 'dNone' : ''}
                    `
                }
                onClick={handleNewRecipe}>
                &#43; Añadir una receta
            </button>
        </div>
    </>
  )
}

