import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

// Persist configuration
const persistConfig = {
  key: "shopifyRedux",
  storage,
};

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with Redux Toolkit
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "FLUSH",
          "REHYDRATE",
          "PAUSE",
          "PERSIST",
          "PURGE",
          "REGISTER",
        ],
      },
    }),
});

// Create persistor
export const persistor = persistStore(store);
