import { BtnAddRecipe, CategoriesFilter, FormModal, Navbar, RecipesGallery } from "../components"

export const DessertsPage = () => {
  return (
    <>

    {/* Barra de navegación */}
    <Navbar/>

    {/* Encabezado */}
    <header className='text-center py-5 colorFondo'>
    <h1>Postres</h1>
    </header>

    {/* Listado de Recetas */}
    <div className='container-fluid row'>
    <div className='col-sm-3'>
        {/* Filtro */}
        <CategoriesFilter/>
    </div>
    <div className='col my-3'>
        <h2 className='subtitulo'>Postres</h2>
        {/* Galería de recetas guardadas */}
        <RecipesGallery category={'postre'}/>
    </div>
    <BtnAddRecipe/>
    <FormModal/>
    </div>

    {/* Pie de Página */}
    <footer className='text-center py-3 colorFondo'>
        <i className="fa-regular fa-copyright"></i>
        <span>&nbsp; 2023 | Ñam Ñam</span>
    </footer>
    
    </>
  )
}
