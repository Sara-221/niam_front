import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth'
import { recipesSlice } from './recipes'
import { uiSlice } from './ui'

export default configureStore({
  reducer: {
    ui: uiSlice.reducer,
    recipes: recipesSlice.reducer,
    auth: authSlice.reducer
  },
})
