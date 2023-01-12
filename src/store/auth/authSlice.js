import { createSlice } from '@reduxjs/toolkit'


// Creamos el slice que controle el inicio y cierre de sesión del usuario. 
export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'checking',
        user: {},
        errorMsg: undefined
    },
    reducers: {
        // Comprobar que el usuario existe y la contraseña es correcta.
        onChecking: (state)=>{
            state.status= 'checking' //Comprobando usuario y contraseña
            state.user= {},
            state.errorMsg=undefined
        },
        // Inicio de sesión
        onLoging: (state,{payload})=>{
            state.status='authenticated', // Usuario autentificado
            state.user=payload,
            state.errorMsg=undefined
        },
        // Cierre de sesión
        onLogout: (state, {payload})=>{
            state.status='not-authenticated', // Usuario no autentificado
            state.user={},
            state.errorMsg=payload
        },
        // Resetear posibles mensajes de error
        clearErrorMsg: (state)=>{state.errorMsg=undefined}
    }
})

export const {onChecking, onLoging, onLogout, clearErrorMsg} = authSlice.actions