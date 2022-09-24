import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { moviesActions, moviesReducer } from "./slices/movies.slice";

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
export const useAppSelector: TypedUseSelectorHook<IAppState> = useSelector;
export const appActions = { ...moviesActions };

export default store;
