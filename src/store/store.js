import { configureStore } from '@reduxjs/toolkit'
import { uiSlice } from './ui'

export default configureStore({
  reducer: {
    ui: uiSlice.reducer
  },
})
