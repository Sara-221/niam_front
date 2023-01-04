import { BtnAddRecipe, CategoriesFilter, Navbar, RecipesGallery } from "../components"


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
    <div className='container-fluid row'>
      <div className='col-3'>
        {/* Filtro */}
        <CategoriesFilter/>
      </div>
      <div className='col my-3'>
        <h2 className='subtitulo'>Todas las recetas</h2>
        {/* Galería de recetas guardadas */}
        <RecipesGallery/>
      </div>
      <BtnAddRecipe/>
    </div>

    {/* Pie de Página */}
    <footer className='text-center py-3 colorFondo'>
        <i className="fa-regular fa-copyright"></i>
        <span>&nbsp; 2023 | Ñam Ñam</span>
    </footer>

    </>
  )
}
