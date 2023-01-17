import { BtnAddRecipe, CategoriesFilter, FormModal, Navbar, RecipesGallery } from "../components"
import { Footer } from "../components/Footer"


export const RecipesPage = () => {


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
    <Footer/>
    </>
  )
}
