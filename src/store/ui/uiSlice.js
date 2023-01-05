import { createSlice } from "@reduxjs/toolkit";

// Slice que se ocupará de abrir y cerrar la ventana modal
export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        modalIsOpen: false
    },
    reducers: {
        onOpenModal: (state) => {state.modalIsOpen=true},
        onCloseModal: (state) => {state.modalIsOpen=false}
    }
})

export const {onOpenModal, onCloseModal} = uiSlice.actions
