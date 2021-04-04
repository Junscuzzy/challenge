import { combineReducers, configureStore } from "@reduxjs/toolkit"

import counterReducer from "./slices/counterSlice"
import notesReducer from "./slices/notesSlice"

const rootReducer = combineReducers({
  counter: counterReducer,
  notes: notesReducer,
})

export type CoreState = ReturnType<typeof rootReducer>

export default configureStore({
  reducer: rootReducer,
  devTools: true,
})
