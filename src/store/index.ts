import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from "../features/countries/slice";

export const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [],
        ignoredPaths: [],
      },
    }).concat(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
