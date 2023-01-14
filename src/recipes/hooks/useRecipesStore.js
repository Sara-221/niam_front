import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import recipesAPI from "../../api/recipesAPI"
import { onLogout } from "../../store/auth"
import { onAddRecipe, onDeleteRecipe, onEditRecipe, onLoadRecipes, onSetActiveRecipe } from "../../store/recipes/recipesSlice"

// En este hook despachamos las acciones del reducer de recipesSlice.
export const useRecipesStore = () => {

    // Importamos del store los reducer
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
            }else{
                // Llamada a la API utilizando el método post para añadir la nueva receta
                const {data} = await recipesAPI.post('/recipes/', selectedRecipe)
                // Añadimos la receta con el id asignado por la base de datos.
                dispatch(onAddRecipe({_id:data.newRecipe._id,...selectedRecipe}))
            }
        } catch (error) {
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
