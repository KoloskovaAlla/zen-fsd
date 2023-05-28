import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: localStorage.getItem('lang') ?? 'en',
};

export const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});

export const { reducer: langReducer } = langSlice;
export const { setLang } = langSlice.actions;