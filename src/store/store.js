import { configureStore } from '@reduxjs/toolkit'
import { recipesSlice } from './recipes/recipesSlice'
import { uiSlice } from './ui'

export default configureStore({
  reducer: {
    ui: uiSlice.reducer,
    recipes: recipesSlice.reducer
  },
})
