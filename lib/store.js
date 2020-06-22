import { configureStore } from '@reduxjs/toolkit'

import clockReducer from './slices/clockSlice'
import counterReducer from './slices/counterSlice'
import notesReducer from './slices/notesSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
    notes: notesReducer,
  },
  devTools: true,
})
