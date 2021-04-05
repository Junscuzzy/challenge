import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import counterReducer from "./slices/counterSlice"
import notesReducer from "./slices/notesSlice"
import userReducer from "./slices/userSlice"

const rootReducer = combineReducers({
  counter: counterReducer,
  notes: notesReducer,
  user: userReducer,
})

export type CoreState = ReturnType<typeof rootReducer>

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function createStore() {
  const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })

  const persistor = persistStore(store)

  return { store, persistor }
}
