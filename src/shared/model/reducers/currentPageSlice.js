import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {import('./types').CurrentPageState} State
 * @type {State}
 */
const initialState = {
  currentPage: '',
};

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    setCurrentPage: (state, { payload }) => {
      state.currentPage = payload;
    },
  },
});

export const { reducer: currentPageReducer } = currentPageSlice;
export const { setCurrentPage } = currentPageSlice.actions;
