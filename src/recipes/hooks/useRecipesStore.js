import { useDispatch, useSelector } from "react-redux"
import { onAddRecipe, onDeleteRecipe, onEditRecipe, onSetActiveRecipe } from "../../store/recipes/recipesSlice"

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
        // Comprobamos si la receta existe (tiene un id), y si es el caso, la editamos.
        if(selectedRecipe._id){
            dispatch(onEditRecipe({...selectedRecipe}))
        }else{
            dispatch(onAddRecipe({_id:new Date().getTime(),...selectedRecipe}))
        }
    }

    // Eliminar receta
    const startDeletingRecipe=async()=>{
        dispatch(onDeleteRecipe())
    }

  return {
    allRecipes,
    activeRecipe,
    setActiveRecipe,
    startSavingRecipe,
    startDeletingRecipe
  }
}
