import { BtnAddRecipe, CategoriesFilter, FormModal, Navbar, RecipesGallery } from "../components"
import { Footer } from "../components/Footer"

export const MainsPage = () => {

    return(
        <>
        {/* Barra de navegación */}
        <Navbar/>

        {/* Encabezado */}
        <header className='text-center py-5 colorFondo'>
        <h1>Platos Principales</h1>
        </header>

        {/* Listado de Recetas */}
        <div className='container-fluid row'>
        <div className='col-sm-3'>
            {/* Filtro */}
            <CategoriesFilter/>
        </div>
        <div className='col my-3'>
            <h2 className='subtitulo'>Platos Principales</h2>
            {/* Galería de recetas guardadas */}
            <RecipesGallery category={'principal'}/>
        </div>
        <BtnAddRecipe/>
        <FormModal/>
        </div>

        {/* Pie de Página */}
        <Footer/>
        </>

    )
}
