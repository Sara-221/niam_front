import { configureStore } from '@reduxjs/toolkit'
import { recipesSlice } from './recipes'
import { uiSlice } from './ui'

export default configureStore({
  reducer: {
    ui: uiSlice.reducer,
    recipes: recipesSlice.reducer
  },
})
