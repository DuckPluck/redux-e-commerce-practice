import { PayloadAction, createSlice } from '@reduxjs/toolkit';


const initialState = {
  category: '',
  limit: 10,
  search: '',
};

export const productsSlice = createSlice({
  initialState,
  name: 'products',
  reducers: {
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    changeSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    loadMoreProducts: (state) => {
      state.limit = state.limit + 10;
    },
  },
});

export const { loadMoreProducts, changeSearch, changeCategory } = productsSlice.actions;

export default productsSlice.reducer;
