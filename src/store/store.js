import { configureStore } from '@reduxjs/toolkit'
import errorReducer from './slicer'

export const store = configureStore({
  reducer: {
    error: errorReducer,
    
  },
})