import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/movies.slice";

export const rootReducer = combineReducers({
  moviesState: moviesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type IAppState = ReturnType<typeof rootReducer>;

export default store;
