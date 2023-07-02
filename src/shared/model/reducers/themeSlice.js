import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {import('./types').ThemeState} State
 * @type {State}
 */

const initialState = {
  theme: localStorage.getItem('theme') ?? 'light'
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }) => {
      state.theme = payload;
    },
  },
});

export const { reducer: themeReducer } = themeSlice;
export const { setTheme } = themeSlice.actions;
