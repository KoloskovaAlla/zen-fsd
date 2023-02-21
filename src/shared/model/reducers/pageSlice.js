import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentPage: ''
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    }
  }
});

export const { reducer: pageReducer } = pageSlice;
export const { setCurrentPage } = pageSlice.actions;

