import { createSlice } from "@reduxjs/toolkit";

// Slice que se ocupará de abrir y cerrar las ventanas modales
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        formModalIsOpen: false,
        recipeModalIsOpen: false
    },
    reducers: {
        // Modal que contiene el formulario
        onOpenFormModal: (state) => {state.formModalIsOpen=true},
        onCloseFormModal: (state) => {state.formModalIsOpen=false},
        // Modal que contiene los detalles de la receta
        onOpenRecipeModal: (state) => {state.recipeModalIsOpen=true},
        onCloseRecipeModal: (state) => {state.recipeModalIsOpen=false}
    }
})

export const {
    onOpenFormModal, 
    onCloseFormModal, 
    onOpenRecipeModal, 
    onCloseRecipeModal
} = uiSlice.actions
