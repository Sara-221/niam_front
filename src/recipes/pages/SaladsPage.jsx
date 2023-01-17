import { BtnAddRecipe, CategoriesFilter, FormModal, Navbar, RecipesGallery } from "../components"
import { Footer } from "../components/Footer"

export const SaladsPage = () => {

    return (
        <>
        {/* Barra de navegación */}
        <Navbar/>

        {/* Encabezado */}
        <header className='text-center py-5 colorFondo'>
        <h1>Ensaladas</h1>
        </header>

        {/* Listado de Recetas */}
        <div className='container-fluid row'>
        <div className='col-sm-3'>
            {/* Filtro */}
            <CategoriesFilter/>
        </div>
        <div className='col my-3'>
            <h2 className='subtitulo'>Ensaladas</h2>
            {/* Galería de recetas guardadas */}
            <RecipesGallery category={'ensalada'}/>
        </div>
        <BtnAddRecipe/>
        <FormModal/>
        </div>

        {/* Pie de Página */}
        <Footer/>
        </>
  )
}
