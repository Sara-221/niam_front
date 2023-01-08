import { BtnAddRecipe, CategoriesFilter, FormModal, Navbar, RecipesGallery } from "../components"

export const SoupsPage = () => {
  return (
    <>

    {/* Barra de navegación */}
    <Navbar/>

    {/* Encabezado */}
    <header className='text-center py-5 colorFondo'>
    <h1>Sopas Y Cremas</h1>
    </header>

    {/* Listado de Recetas */}
    <div className='container-fluid row'>
    <div className='col-sm-3'>
        {/* Filtro */}
        <CategoriesFilter/>
    </div>
    <div className='col my-3'>
        <h2 className='subtitulo'>Sopas Y Cremas</h2>
        {/* Galería de recetas guardadas */}
        <RecipesGallery category={'sopa'}/>
    </div>
    <BtnAddRecipe/>
    <FormModal/>
    </div>

    {/* Pie de Página */}
    <footer className='text-center py-3 fixed-bottom colorFondo'>
        <i className="fa-regular fa-copyright"></i>
        <span>&nbsp; 2023 | Ñam Ñam</span>
    </footer>
    
    </>
  )
}
