import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';
import { API } from '../API/API';


const rootReducer = combineReducers({
  productsSlice,
  [API.reducerPath]: API.reducer,
});

export const setupStore = () => {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({}).concat(API.middleware),
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
