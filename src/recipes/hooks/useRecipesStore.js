import Notiflix, { Notify } from "notiflix"
import { useDispatch, useSelector } from "react-redux"
import recipesAPI from "../../api/recipesAPI"
import { onAddRecipe, onDeleteRecipe, onEditRecipe, onLoadRecipes, onSetActiveRecipe } from "../../store/recipes/recipesSlice"

// Configurar las opciones por defecto de Notiflix Notify
Notiflix.Notify.init({
    width: '100%',
    position: 'left-top',
    distance:'0px',
    timeout: 5000,
    fontFamily: 'Open Sans',
    fontSize: '14px',
    cssAnimationStyle: 'from-top',
});


// En este hook despachamos las acciones del reducer de recipesSlice.
export const useRecipesStore = () => {

    // Importamos del store los reducer que necesitamos
    const {allRecipes, activeRecipe} = useSelector((state)=>state.recipes)
    const dispatch = useDispatch()

    // Declarar la receta seleccionada como activa
    const setActiveRecipe = (selectedRecipe) => {
        dispatch(onSetActiveRecipe(selectedRecipe))
    }

    // Guardar la receta
    const startSavingRecipe=async(selectedRecipe)=>{

        try {
            // Comprobamos si la receta existe (tiene un id), y si es el caso, la editamos.
            if(selectedRecipe._id){
                // Editar la receta llamando a la API con el método put
                const {data} = await recipesAPI.put(`/recipes/${selectedRecipe._id}`, selectedRecipe)
                dispatch(onEditRecipe({...selectedRecipe}))
                // Notificar al usuario
                Notify.success("Receta actualizada.")
            }else{
                // Llamada a la API utilizando el método post para añadir la nueva receta
                const {data} = await recipesAPI.post('/recipes/', selectedRecipe)
                // Añadimos la receta con el id asignado por la base de datos.
                dispatch(onAddRecipe({_id:data.newRecipe._id,...selectedRecipe}))
                // Notificar al usuario
                Notify.success("Receta guardada.")
            }
        } catch (error) {
            // Notificar al usuario de que ha habido error
            Notify.failure("Error al guardar la receta. Introduce un enlace válido.")
            // Mostramos el error en la consola
            console.log(error)
        }

    }

    // Mostrar todas las recetas
    const startGettingRecipes=async()=>{
        try {
            // Las recogemos de la API
            const {data} = await recipesAPI.get('/recipes/')
            dispatch(onLoadRecipes(data.recipesList))

        } catch (error) {
            console.log(error)
        }
    }

    // Eliminar receta
    const startDeletingRecipe=async()=>{
        // Borramos la receta de la base de datos con el método delete
        try {
            await recipesAPI.delete(`/recipes/${activeRecipe._id}`)
            dispatch(onDeleteRecipe())
            Notify.info("Receta eliminada.")
        } catch (error) {
            console.log(error)
        }
    }


  return {
    allRecipes,
    activeRecipe,
    setActiveRecipe,
    startSavingRecipe,
    startGettingRecipes,
    startDeletingRecipe,
  }
}
