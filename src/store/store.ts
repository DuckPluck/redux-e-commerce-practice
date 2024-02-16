import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsSlice from './reducers/productsSlice';


const rootReducer = combineReducers({
  productsSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
