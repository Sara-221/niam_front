import { BtnAddRecipe, CategoriesFilter, FormModal, Navbar, RecipesGallery } from "../components"
import { useUiStore } from "../hooks"


export const RecipesPage = () => {

    // Nos traemos el estado de la modal de detalles para decidir si el footer mantiene una posición fija o relativa (clase CSS "fixed-bottom")
    const {formModalIsOpen, recipeModalIsOpen} = useUiStore()


  return (
    <>
    {/* Barra de navegación */}
    <Navbar/>

    {/* Página de inicio "recetas" */}
    {/* Encabezado */}
    <header className='text-center py-5 colorFondo'>
      <h1>Todas las Recetas</h1>
    </header>

    {/* Listado de Recetas */}
    <div className='container-fluid row pb-3'>
      <div className='col-sm-3'>
        {/* Filtro */}
        <CategoriesFilter/>
      </div>
      <div className='col my-3'>
        <h2 className='subtitulo'>Todas las recetas</h2>
        {/* Galería de recetas guardadas */}
        <RecipesGallery/>
      </div>
      <BtnAddRecipe/>
      <FormModal/>
    </div>

    {/* Pie de Página */}
    <footer 
            className={
                `text-center py-3 colorFondo ${formModalIsOpen ? '' : 'fixed-bottom'}` 
            }
        >
        <i className="fa-regular fa-copyright"></i>
        <span>&nbsp; 2023 | Ñam Ñam</span>
    </footer>

    </>
  )
}
