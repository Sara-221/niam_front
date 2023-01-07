import { createSlice } from "@reduxjs/toolkit";

const tmpRecipeList = [
    {
      name: 'nombre de la receta 1',
      category: 'aperitivo',
      time: 'x min',
      url: 'link de la receta',
      ingredients: 'lista de ingredientes',
      method: 'instrucciones',
      notes: '',
      _id: new Date().getTime()
    },
    {
        name: 'nombre de la receta 2',
        category: 'postre',
        time: 'x min',
        url: 'link de la receta',
        ingredients: 'lista de ingredientes',
        method: 'instrucciones',
        notes: '',
        _id: 98140465
    },
    {
      name: 'nombre de la receta 3',
      category: 'principal',
      time: 'x min',
      url: 'link de la receta',
      ingredients: 'lista de ingredientes',
      method: 'instrucciones',
      notes: '',
      _id: 56804
    },
    {
        name: 'nombre de la receta 4',
        category: 'desayuno',
        time: 'x min',
        url: 'link de la receta',
        ingredients: 'lista de ingredientes',
        method: 'instrucciones',
        notes: '',
        _id: 12345
    },

]

//   En este slice definimos el estado inicial del recetario (array vacío y ninguna receta seleccionada) y los reducers que necesitaremos para añadir, editar, ver o eliminar las recetas.
export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        allRecipes: tmpRecipeList,
        activeRecipe:null
    },
    reducers:{
        onSetActiveRecipe:(state,{payload})=>{state.activeRecipe=payload},

        onAddRecipe: (state,{payload})=>{
            state.allRecipes.push(payload)
            state.activeRecipe=null
        },

        onEditRecipe: (state,{payload})=>{
            state.allRecipes = state.allRecipes.map(recipe=>{
                if(recipe._id===payload._id){
                    return payload
                }
            })
        },

        onDeleteRecipe: (state)=>{
            if(state.activeRecipe){
                state.allRecipes=state.allRecipes.filter(event=>event._id !== state.activeRecipe._id)
                state.activeRecipe=null
            }
        }
    }
})

export const {onSetActiveRecipe, onAddRecipe, onEditRecipe, onDeleteRecipe} = recipesSlice.actions
