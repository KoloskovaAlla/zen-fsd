import { createSlice } from '@reduxjs/toolkit';

/**
 * @typedef {import('./types').ThemeInitState} InitState
 */

/** @type InitState */
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
