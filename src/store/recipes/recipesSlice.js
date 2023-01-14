import { createSlice } from "@reduxjs/toolkit";

//   En este slice definimos el estado inicial del recetario (array vacío y ninguna receta seleccionada) y los reducers que necesitaremos para añadir, editar, ver o eliminar las recetas.
export const recipesSlice = createSlice({
    name: 'recipes',
    initialState: {
        allRecipes: [],
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
                }return recipe
            })
        },

        onDeleteRecipe: (state)=>{
            if(state.activeRecipe){
                state.allRecipes=state.allRecipes.filter(event=>event._id !== state.activeRecipe._id)
                state.activeRecipe=null
            }
        },

        onLoadRecipes:(state, {payload})=>{
            state.allRecipes=payload;
        }
    }
})

export const {onSetActiveRecipe, onAddRecipe, onEditRecipe, onDeleteRecipe, onLoadRecipes} = recipesSlice.actions
